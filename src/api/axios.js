import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      // try to get new access token with refresh token
      // try the request again
      // logout user and redirect to login page if error
    }
    return Promise.reject(error);
  }
);

export default api;

// access_token
// refresh_token
