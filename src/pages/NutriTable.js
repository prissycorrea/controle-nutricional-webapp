import React, { useState } from 'react';
import SearchBar from '../components/TablePage/Search';
import Filter from '../components/TablePage/Filter';
import ProductDetails from '../components/TablePage/ProductDetails';
import { searchProducts } from '../api/api';
import styled from '@emotion/styled';
import PaginationButton from '../components/TablePage/PaginationButton';

const NutriTableContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 25px;
    align-items: flex-start;
    gap: 20px;
`;

const ProductDetailsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 80%;
    opacity: ${props => props.hasData ? 1 : 0};
    visibility: ${props => props.hasData ? 'visible' : 'hidden'};
    transition: opacity 0.3s;
`;

const PaginationControls = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const TextContainer = styled.div`
    color: #EFEFEF;
`;

const NutriTable = () => {
    const [productData, setProductData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const PRODUCTS_PER_PAGE = 12;

    const handleSearchResult = (results) => {
        setProductData(results);
        setCurrentPage(1);  // Sempre redefina para a primeira página após uma nova pesquisa
    }

    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const totalPages = Math.ceil(productData.length / PRODUCTS_PER_PAGE);

    return (
        <div>
            <SearchBar onSearch={handleSearchResult}/>
            <NutriTableContainer>
                <Filter />
                <ProductDetailsContainer hasData={productData.length > 0}>
                    {productData.slice(startIndex, endIndex).map((product, index) => (
                        <ProductDetails key={index} productData={product} />
                    ))}
                </ProductDetailsContainer>
            </NutriTableContainer>
            {productData.length > PRODUCTS_PER_PAGE && (
                <PaginationControls>
                    <button 
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        &lt;
                    </button>
                    <TextContainer>Página {currentPage} de {totalPages}</TextContainer>
                    <button 
                        disabled={currentPage * PRODUCTS_PER_PAGE >= productData.length}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        &gt;
                    </button>
                </PaginationControls>
            )}
        </div>
    );
};

export default NutriTable;