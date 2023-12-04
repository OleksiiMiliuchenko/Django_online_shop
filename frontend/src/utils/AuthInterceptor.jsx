import axios from "axios";
import AuthService from "../services/AuthService";

let flag = true;

axios.interceptors.response.use(
  async (response) => await response,
  async (error) => {
    if (error.response.status === 401 && flag) {
      await AuthService.refresh();
    }

    flag = false;
    return error.response;
  },
);
