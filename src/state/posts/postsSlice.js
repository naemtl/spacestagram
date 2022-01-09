import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = "D59JwJ4Gju5ds48Hbi90twGhu33kvzQZwBGb9hE3"

const initialState = {
    marsRoverPosts: []
}

export const fetchMarsRoverPosts = createAsyncThunk("posts/fetchMarsRoverPosts", async () => {
    try {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${API_KEY}`
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.log("Rover seems to be malfunctioning", error);
    }
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        //
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMarsRoverPosts.fulfilled, (state, { payload }) => {
                state.marsRoverPosts = payload.photos
            })
    }
})

export const selectMarsRoverPosts = (state) => state.posts.marsRoverPosts

export default postsSlice.reducer