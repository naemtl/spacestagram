import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

let postsRequest;
const fetchPosts = createAsyncThunk("posts/fetch", async () => {
    if (!postsRequest) {
        postsRequest = fetch("https://api.nasa.gov/planetary/apod?api_key=D59JwJ4Gju5ds48Hbi90twGhu33kvzQZwBGb9hE3")
            .then((response) => response.json());
    }
    return postsRequest;
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
            state.posts = payload
        })
    }
})

export const selectPosts = (state) => state.posts.posts

export default postsSlice.reducer