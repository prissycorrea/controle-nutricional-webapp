import api from './config';

export const fetchProductDetails = async (productId) => {
  try {
    const response = await api.get(`/product/${productId}`); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    throw error;
  }
};
