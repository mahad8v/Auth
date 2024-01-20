import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllPost } from '../../Service/postApi';

const initialSatate = {
  posts: [],
  status: 'idle',
  error: null
} 
  

const postsSlice = createSlice({   
  name: "posts",
  initialState: initialSatate,
    reducers: {
        // getPosts: (state, action) => {
        //     console.log("GET ALL POSTS")
        // },
        // addedPost: (state, action) => {
        //   state.posts.push(action.payload)
        // //   return {
        // //     initialSatate: [ action.payload, ...state]
        // // }
        // },
        // deletePost: (state, action) => {
        //     // console.log("DELELT POST")
        // },
        // updatePost: (state, action) => {
        //     // console.log("UPDATE POST")
        // }   

        extraReducers(builder) {
          builder
            .addCase(getAllPost.pending, (state, action) => {
              state.status = 'loading'
           })
           .addCase(getAllPost.fulfulled, (state, action) => {
              state.status = 'succeeded'

           })
           .addCase(getAllPost.rejected, (state, action) => {
            state.status = 'failed',
            state.error = action.error.message
           })
        }
    }
})


export const selectedAllPosts = (state) => state.posts.posts
export const {addedPost} = postsSlice.actions
export default  postsSlice.reducer