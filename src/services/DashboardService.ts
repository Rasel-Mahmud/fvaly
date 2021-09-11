/* eslint-disable class-methods-use-this */
import { IDashboardState } from '../types';
import request from './httpService';

class DashboardServices {
  getState(): Promise<IDashboardState> {
    return request.get('dashboard/stats');
  }
}

export default new DashboardServices();
