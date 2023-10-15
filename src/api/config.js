import axios from 'axios';

const api = axios.create({
  baseURL: 'https://world.openfoodfacts.org/api/v0',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
