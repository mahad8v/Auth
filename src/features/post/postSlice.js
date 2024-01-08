import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "posts",
    initialState: [],
    error: null,
}

// export const getPosts = createAsyncThunk(

// )

export const postSlice = createSlice({   
    reducers: {
        getPosts: (state, action) => {
            console.log("GET ALL POSTS")
        },
        deletePost: (state, action) => {
            console.log("DELELT POST")
        },
        updatePost: (state, action) => {
            console.log("UPDATE POST")
        }   
    }
})

export const  posts = {
    getPosts,
} = postSlice.actions