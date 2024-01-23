import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createPostService, deletePostService, getAllPostsService } from '../../Service/postApi'; 

const initialState = [];

export const createPost = createAsyncThunk(
  "post/create",
  async (postData) => {
    console.log("post datas",postData)
    const res = await createPostService(postData);
    return res.data;
  }
);

export const retrievePosts = createAsyncThunk(
  "post/retrieve",
  async () => {
    const res = await getAllPostsService();
    console.log(" res from slice",res.data)
    return res.data;
  }
);

export const deletePost = createAsyncThunk(
  "post/delete", 
  async(id) => {
    console.log("id from slice",id)
    const res = await deletePostService(id)
    console.log(res)
  }
)

const postsSlice = createSlice({
  name: "posts",
  initialState,
 
  extraReducers: (builder) => {
    builder
      .addCase(createPost.fulfilled, (state, action) => {
        // state: [...state, action.payload]
        // console.log(action)
        state.unshift(action.payload);
      })
      .addCase(retrievePosts.fulfilled, (state, action) => {
        console.log("action payload data",action.payload)
        return action.payload;

      })
      .addCase(deletePost.fulfilled, (state, action) => {
        // state.posts = state.posts.filter(post => post.id !== action.payload)
        // return state.filter(post => post.id !== action.payload);      
        console.log(action.meta.arg)
        return state.filter(post => post.id !== action.meta.arg);  
        
      })
  },
});

export const { addedPost } = postsSlice.actions;
export default postsSlice.reducer;
