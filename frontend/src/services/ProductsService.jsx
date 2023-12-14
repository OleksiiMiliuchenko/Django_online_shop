import instance from "../utils/AuthInterceptor";

const API_URL = "http://127.0.0.1:8000/api/products/";

export default class ProductsService {
  static getProducts() {
    return instance.get(API_URL);
  }

  static getProduct(id) {
    const url = `${API_URL}${id}`;
    return instance.get(url);
  }

  static createProduct(product) {
    const url = API_URL + "create/";
    return instance.post(url, product);
  }

  static updateProduct(product) {
    const url = `${API_URL}details/${product.id}`;
    return instance.put(url, product);
  }

  static deleteProduct(product) {
    const url = `${API_URL}details/${product.id}`;
    return instance.delete(url);
  }
}
