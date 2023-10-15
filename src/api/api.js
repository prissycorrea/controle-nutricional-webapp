import axios from 'axios';

const proxyURL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = proxyURL + 'https://world.openfoodfacts.org/cgi';

export const searchProducts = async (query, pageSize = 100) => {
    try {
        const response = await axios.get(`${BASE_URL}/search.pl`, {
            params: {
                search_terms: query,        
                page_size: pageSize,
                json: 1
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
