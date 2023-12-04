import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

export default class AuthService {
  static async login(data) {
    const response = await axios.post(API_URL + "token/", data);
    const access = response.data.access;
    const refresh = response.data.refresh;

    localStorage.clear();
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

    return response;
  }

  static async register(data) {
    const user = await axios.post(API_URL + "register/", data);

    if (user?.status === 201) {
      const response = await AuthService.login({
        username: data.username,
        password: data.password,
      });

      return response;
    } else {
      return user;
    }
  }

  static async logout() {
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    const response = await axios.post(
      API_URL + "logout/",
      { refresh: refresh },
      { headers: { Authorization: `Bearer ${access}` } },
    );

    localStorage.clear();

    return response;
  }

  static async refresh() {
    const token = localStorage.getItem("refresh");

    const response = await axios.post(API_URL + "token/refresh/", {
      refresh: token,
    });

    const access = response.data.access;
    const refresh = response.data.refresh;

    localStorage.clear();
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

    return response;
  }
}
