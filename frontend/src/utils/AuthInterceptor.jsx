import axios from "axios";
import AuthService from "../services/AuthService";

const instance = axios.create({
  withCredentials: true,
});

instance.interceptors.request.use((request) => {
  const access = localStorage.getItem("access");
  if (access) {
    request.headers.Authorization = `Bearer ${access}`;
  }
  return request;
});

// instance.interceptors.response.use(
//   async (response) => await response,
//   async (error) => {
//     if (error.response.status === 401) {
//       const response = await AuthService.refresh();
//
//       delete error.config.headers.Authorization;
//       console.log(error.config);
//
//       return axios.request(error.config);
//     }
//
//     return Promise.reject(error);
//   },
// );

export default instance;
