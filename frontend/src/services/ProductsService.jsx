import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/products/";

export default class ProductsService {
  static getProducts() {
    return axios.get(API_URL);
  }

  static getProduct(id) {
    const url = `${API_URL}${id}`;
    return axios.get(url);
  }

  static createProduct(product) {
    const access = localStorage.getItem("access")
    return axios.post(API_URL + "create/", product,
        { headers: { Authorization: `Bearer ${access}` } },
    );
  }

  static updateProduct(product) {
    const access = localStorage.getItem("access")
    const url = `${API_URL}details/${product.id}`;
    return axios.put(url, product,
        { headers: { Authorization: `Bearer ${access}` } },
    );
  }

  static deleteProduct(product) {
    const access = localStorage.getItem("access")
    const url = `${API_URL}details/${product.id}`;
    return axios.delete(url,
    { headers: { Authorization: `Bearer ${access}` } },
    );
  }
}
