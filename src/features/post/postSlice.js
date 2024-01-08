import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialSatate =[
    {
      "id": 1,
      "title": "Lorem Ipsum",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "author": "John Doe"
    },
    {
      "id": 2,
      "title": "Sample Title",
      "content": "This is some sample content. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "author": "Jane Smith"
    },
    {
      "id": 3,
      "title": "Random Thoughts",
      "content": "Random content for the third entry. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "author": "Bob Johnson"
    }
  ]
  
const initialState = {
    name: "posts",
    initialState: initialSatate,
    error: null,
}


const postSlice = createSlice({   
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

export default  posts = {
    // getPosts,
    // delete
} = postSlice.reducer