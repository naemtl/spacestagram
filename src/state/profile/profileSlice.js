import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: {
        name: 'Matt',
        likedPosts: []
    }
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    }
})

export default profileSlice.reducer