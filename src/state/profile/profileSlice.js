import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: 'ZiggyStardust'
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        //
    }
})

export const selectProfileUsername = (state) => state.profile.username

export default profileSlice.reducer