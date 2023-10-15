import axios from 'axios';

const BASE_URL = 'https://world.openfoodfacts.org/api/v0';

export const searchProducts = async (query, pageSize = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                q: query,        
                page_size: pageSize,  
            }
        });

        if (response.data.products && response.data.products.length > 0) {
            return response.data.products;  
        } else {
            console.error('Nenhum produto encontrado para a query:', query);
            return [];
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
        return [];
    }
}


