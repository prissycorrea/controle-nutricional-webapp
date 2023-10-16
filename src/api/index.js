import api from './config';

export const fetchProductDetails = async (productId) => {
  try {
    const response = await api.get(`/product/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
