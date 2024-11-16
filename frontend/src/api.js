import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Dirección de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
