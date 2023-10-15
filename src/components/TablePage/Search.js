import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as SearchIcon } from '../../images/icons/search-icon.svg';
import InsertButton from '../InsertButton';
import { searchProducts } from '../../api/api';
import ProductDetails from './ProductDetails';

const SearchContainer = styled.div`
  background-color: #EFEFEF;
  border: 2px solid transparent;
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
  align-items: center;
  padding: 8px 16px;
  border-radius: 50px; 
  width: 40%;
  &:hover {
    border: 2px solid #CBFF45;
  }

  &:focus {
    border: 2px solid #C55FFF;
  }
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  flex: 1;
  color: #979393;
  font-size: 16px;
  outline: none;

  ::placeholder {
    color: #979393;
  }
`;

const IconContainer = styled.div`
  margin-left: 8px;
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [productData, setProductData] = useState(null);  // Estado para armazenar os dados do produto obtidos

  const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = async () => {
    const results = await searchProducts(searchTerm);
    if (results && results.length > 0) {
      onSearch(results[0]);  // Enviando o resultado para o componente pai
    }
    console.log(results);  
    console.log('Produtos retornados:', results);
  }

  return (
    <div>
        <SearchContainer>
            <SearchInput 
                type="text" 
                placeholder="Buscar um alimento" 
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <IconContainer>
                <SearchIcon />
            </IconContainer>
        </SearchContainer>
        <InsertButton onClick={handleSearchSubmit}>Buscar</InsertButton>
    </div>
  );
};

export default SearchBar;