const { configureStore } = require("@reduxjs/toolkit");
import posts from "../features/post/postSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        posts: postsReducer
    }
})