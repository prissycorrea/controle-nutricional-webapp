import axios from 'axios';

const api = axios.create({
  baseURL: 'https://world.openfoodfacts.org/api/v0', // URL da API de staging do Open Food Facts
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
