import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllPost } from '../../Service/postApi';

const initialSatate = {
  posts: []
} 

const postsSlice = createSlice({   
  name: "posts",
  initialState: initialSatate,
    extraReducers(builder) {
      // builder
      //   .addCase(getAllPost.pending, (state, action) => {
      //     state.status = 'loading'
      //   })
      //   .addCase(getAllPost.fulfulled, (state, action) => {
      //     state.status = 'succeeded'

      //   })
      //   .addCase(getAllPost.rejected, (state, action) => {
      //   state.status = 'failed',
      //   state.error = action.error.message
      //   })
    }
    
})


export const selectedAllPosts = (state) => state.posts.posts
export const {addedPost} = postsSlice.actions
export default  postsSlice.reducer