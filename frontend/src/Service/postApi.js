import http from "../utils/httpCommon";

export const getAllPostsService = () => {
  return http.get("posts"); 
}

export const createPostService = (postData) => {
    console.log(postData)
  return http.post("posts/", postData); 
}
