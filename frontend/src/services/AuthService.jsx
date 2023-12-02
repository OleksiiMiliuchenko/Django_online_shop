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

  static async logout() {
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    const response = await axios.post(
      API_URL + "logout/",
      { refresh: refresh },
      { headers: { Authorization: `Bearer ${access}` } },
    );

    if (response?.status === 205 || !response) {
      localStorage.clear();
    }

    return response;
  }

  static async refresh() {
    let refresh = localStorage.getItem("refresh");

    const response = await axios.post(API_URL + "token/refresh/", {
      refresh: refresh,
    });

    const access = response.data.access;
    refresh = response.data.refresh;

    localStorage.clear();
    localStorage.setItem("access", refresh);
    localStorage.setItem("refresh", access);

    return response;
  }
}
