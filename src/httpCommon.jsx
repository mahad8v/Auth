const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        credentials: "include",
    }
    
  });

  axios.interceptors.response.use(function (response) {
    
    return response;
  });