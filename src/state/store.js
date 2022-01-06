import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./posts/postsSlice";
import profileReducer from "./profile/profileSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        profile: profileReducer
    },
    devTools: true
})