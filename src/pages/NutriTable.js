import React, { useState } from 'react';
import SearchBar from '../components/TablePage/Search';
import Filter from '../components/TablePage/Filter';
import ProductDetails from '../components/TablePage/ProductDetails';
import { searchProducts } from '../api/api';
import styled from '@emotion/styled';

const NutriTableContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 25px;
`;

const ProductDetailsContainer = styled.div`
    opacity: ${props => props.hasData ? 1 : 0};
    visibility: ${props => props.hasData ? 'visible' : 'hidden'};
    transition: opacity 0.3s;
`;

const NutriTable = () => {
    const [productData, setProductData] = useState(null);

    const handleSearchResult = (result) => {
      setProductData(result);
    }

    return (
        <div>
            <SearchBar onSearch={handleSearchResult}/>
            <NutriTableContainer>
                <Filter />
                {productData && <ProductDetails productData={productData} />}
            </NutriTableContainer>
        </div>
    );
};

export default NutriTable;