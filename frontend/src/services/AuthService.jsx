import { nullifyTokens, setTokens } from "../utils/manageTokens";
import instance from "../utils/AuthInterceptor";

const API_URL = "http://127.0.0.1:8000/";

export default class AuthService {
  static async login(data) {
    const response = await instance.post(API_URL + "token/", data);

    if (response?.status === 200) {
      setTokens(response.data);
    }

    return response;
  }

  static async refresh() {
    const response = await instance.post(API_URL + "token/refresh/");

    if (response?.status === 200) {
      setTokens(response.data);
    }

    return response;
  }

  static async register(data) {
    const response = await instance.post(API_URL + "register/", data);

    if (response?.status === 201) {
      return await AuthService.login({
        username: data.username,
        password: data.password,
      });
    }

    return response;
  }

  static async logout() {
    const response = await instance.post(API_URL + "logout/");

    if (response?.status === 205) {
      nullifyTokens();
    }

    return response;
  }
}
