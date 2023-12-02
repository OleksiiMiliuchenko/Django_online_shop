import axios from "axios";
import AuthService from "../services/AuthService";

let flag = true;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    let access = localStorage.getItem("access_token");
    let refresh = localStorage.getItem("refresh_token");

    if (error.response.status === 401 && flag) {
      const response = await AuthService.refresh({ refresh: refresh });

      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      localStorage.clear();

      console.log("401 intercepted");

      return;
    }

    if (error.response.stat === 400 && flag) {
      AuthService.logout(
        { refresh: refresh },
        {
          headers: { Authorization: "Bearer " + access },
        },
      );

      console.log("400 intercepted");

      return;
    }

    flag = false;
    return "smth wrong";
  },
);
