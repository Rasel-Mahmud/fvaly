import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 15000,
});

instance.interceptors.request.use((config) => ({
  ...config,
  headers: {
    Authorization: JSON.parse(
      JSON.parse(localStorage.getItem('persist:fvaly') || '').auth
    )?.data?.token,
  },
}));

const response = (res: AxiosResponse) => res.data.data;

const request = {
  get: (url: string) => instance.get(url).then(response),

  post: (url: string, body: object) => instance.post(url, body).then(response),

  patch: (url: string, body: object) =>
    instance.patch(url, body).then(response),

  delete: (url: string) => instance.patch(url).then(response),
};

export default request;
