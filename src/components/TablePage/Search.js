import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as SearchIcon } from '../../images/icons/search-icon.svg';
import SubmitButton from '../SubmitButton';
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
  margin-bottom: 40px;
  height: 10%;
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

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

const IconContainer = styled.div`
  margin-left: 8px;
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const products = await searchProducts(searchTerm);
    if (products && products.length > 0) {
      onSearch(products);
    }
    console.log('Produtos retornados:', products);
    setSearchTerm('');
}


  return (
    <div>
        <SearchContainer>
            <SearchForm onSubmit={handleSearchSubmit}>   {/* Adicionado um formulário para lidar com a tecla "Enter" */}
                <SearchInput 
                    type="text" 
                    placeholder="Buscar um alimento" 
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <IconContainer>
                    <SubmitButton type="submit" icon={SearchIcon}>Buscar</SubmitButton>
                </IconContainer>
            </SearchForm>
        </SearchContainer>
    </div>
  );
};

export default SearchBar;