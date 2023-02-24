import axios from "axios";
const userUrl = 'http://localhost:3002/users';
const baseUrl = 'http://localhost:3001/products';
class ProductService {
    getAllProducts() {
        return axios.get(baseUrl);
    }
    createProduct(product) {
        return axios.post(baseUrl, product);
    }
    getProductById(productId) {
        return axios.put(baseUrl + "/" + productId);
    }
    updateProduct(product, productId) {
        return axios.put(baseUrl + "/" + productId, product);
    }
    deleteProduct(productId) {
        return axios.delete(baseUrl + "/" + productId);
    }
    getAllUsers() {
        return axios.get(userUrl);
    }

}
export default new ProductService();