import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/products/";

export default class ProductsService {
  static getProducts() {
    const url = `${API_URL}`;
    return axios.get(url);
  }

  static getProduct(id) {
    const url = `${API_URL}${id}`;
    return axios.get(url);
  }

  static createProduct(product) {
    const url = `${API_URL}`;
    return axios.post(url, product);
  }

  static updateProduct(product) {
    const url = `${API_URL}${product.id}`;
    return axios.put(url, product);
  }

  static deleteProduct(product) {
    const url = `${API_URL}${product.id}`;
    return axios.delete(url);
  }
}
