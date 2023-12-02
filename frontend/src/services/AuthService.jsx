import axios from "axios";

const API_URL = "http://127.0.0.1:8000/token/";

export default class AuthService {
  static login(data) {
    return axios.post(API_URL, data);
  }

  static refresh(data, auth) {
    return axios.post(API_URL + "refresh/", data);
  }

  static logout(data, auth) {
    return axios.post(API_URL + "logout/", data, auth);
  }
};
