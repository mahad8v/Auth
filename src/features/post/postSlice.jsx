import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialSatate =[
    {
      "id": 1,
      "title": "Lorem Ipsum",
      "content": "Lorem ipsum dolor sit amet, aliqua.",
      "author": "John Doe"
    },
    {
      "id": 2,
      "title": "Sample Title",
      "content": "This is some sample content. consequat.",
      "author": "Jane Smith"
    },
    {
      "id": 3,
      "title": "Random Thoughts",
      "content": "Random content for the third entry. pariatur.",
      "author": "Bob Johnson"
    }
  ]
  

const postsSlice = createSlice({   
  name: "posts",
  initialState: initialSatate,
    reducers: {
        getPosts: (state, action) => {
            console.log("GET ALL POSTS")
        },
        addedPost: (state, action) => {
          state.push(action.payload)
        },
        deletePost: (state, action) => {
            console.log("DELELT POST")
        },
        updatePost: (state, action) => {
            console.log("UPDATE POST")
        }   
    }
})

export const selectAllPost = (state) => state.posts
export const {addedPost} = postsSlice.actions
export default  postsSlice.reducer