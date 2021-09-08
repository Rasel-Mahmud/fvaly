/* eslint-disable class-methods-use-this */
import { IAuth } from '../types';
import request from './httpService';

class AuthService {
  login(body: { email: string; password: string }): Promise<IAuth> {
    return request.post(`/auth/login`, body);
  }

  logout(): Promise<any> {
    return request.get(`/auth/logout/`);
  }
}

export default new AuthService();
