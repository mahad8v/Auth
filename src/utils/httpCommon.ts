import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
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