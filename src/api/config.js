import axios from 'axios';

const api = axios.create({
  baseURL: 'https://br.openfoodfacts.org',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
