import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = "D59JwJ4Gju5ds48Hbi90twGhu33kvzQZwBGb9hE3"

const initialState = {
    postOfTheDay: null,
    marsRoverPosts: []
}

export const fetchPostOfTheDay = createAsyncThunk("posts/fetchPostOfTheDay", async () => {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.log("My particle accelerator seems to be malfunctioning", error);
    }
});

export const fetchMarsRoverPosts = createAsyncThunk("posts/fetchMarsRoverPosts", async () => {
    try {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${API_KEY}`
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.log("My Mars rover seems to be malfunctioning", error);
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
            .addCase(fetchPostOfTheDay.fulfilled, (state, { payload }) => {
                state.postOfTheDay = payload
            })
            .addCase(fetchMarsRoverPosts.fulfilled, (state, { payload }) => {
                state.marsRoverPosts.push(payload.photos)
            })
    }
})

export const selectPostOfTheDay = (state) => state.posts.postOfTheDay

export const selectMarsRoverPosts = (state) => state.posts.marsRoverPosts

export default postsSlice.reducer