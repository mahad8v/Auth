import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1/',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        credentials: "include",
    }
    
  });

export default instance
  // axios.interceptors.response.use(function (response) {
    
  //   return response;
  // });