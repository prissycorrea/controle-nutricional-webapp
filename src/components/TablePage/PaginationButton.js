import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 24px;  // Ajuste conforme necessário
    color: #CBFF45;
`;

const PaginationButton = ({ icon }) => {
    return (
        <Button>
            {icon}
        </Button>
    );
};

export default PaginationButton;
