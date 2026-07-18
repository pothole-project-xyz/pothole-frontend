import axios from 'axios';

// Seedhe bina import ke live render ka URL daal diya
const api = axios.create({
  baseURL: "https://pothole-backend-70c2.onrender.com/api",
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