/* eslint-disable class-methods-use-this */
import request from './httpService';
import { IProduct } from '../types';

class ProductService {
  getProduct(): Promise<IProduct[]> {
    return request.get('product');
  }

  getProductByID(id: string): Promise<IProduct> {
    return request.get(`product/${id}`);
  }

  addProduct(body: object): Promise<IProduct[]> {
    return request.post(`product`, body);
  }

  updateProduct(id: string, body: object): Promise<IProduct[]> {
    return request.patch(`product/${id}`, body);
  }

  deleteProduct(id: string): Promise<IProduct[]> {
    return request.delete(`product/${id}`);
  }
}

export default new ProductService();
