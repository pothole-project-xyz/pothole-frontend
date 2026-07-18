import { BASE_URL } from '../../config.js'; // Curly braces ke sath import kiya
import axios from 'axios';

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('srm_access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (typeof window !== 'undefined' && err.response?.status === 401) {
      localStorage.removeItem('srm_access_token');
      localStorage.removeItem('srm_user');
    }
    return Promise.reject(err);
  }
);

export default api;