import axios from "axios";
import AuthService from "../services/AuthService";

let flag = true;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401 && flag) {
      await AuthService.refresh();

      return;
    }

    if (error.response.stat === 400 && flag) {
      await AuthService.logout();

      return;
    }

    flag = false;
    return "smth wrong";
  },
);
