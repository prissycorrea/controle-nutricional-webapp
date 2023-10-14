import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as SearchIcon } from '../../images/icons/search-icon.svg';

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

const SearchBar = ({ onSearchChange }) => {
  return (
    <SearchContainer>
      <SearchInput 
        type="text" 
        placeholder="Buscar um alimento" 
        onChange={onSearchChange}
      />
        <IconContainer>
            <SearchIcon />
        </IconContainer>
    </SearchContainer>
  );
};

export default SearchBar;
