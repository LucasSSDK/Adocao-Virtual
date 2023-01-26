import { LoginRequest } from '../types/request';
import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const api = {
  login: async ({ email, password }: LoginRequest) => {
    try {
      const response = await axios.post('/Autorizatio,/login', {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      
      return response.data;
    } catch (err) {
      alert(err);
    }
  },
};
