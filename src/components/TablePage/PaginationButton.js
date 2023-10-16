import React from 'react';
import styled from '@emotion/styled';

const PreviousNextButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 32px;
    color: #CBFF45;
    margin: 0 10px;

    &:disabled {
        color: #A0A0A0;
        cursor: not-allowed;
    }
`;

const PaginationButton = ({ text, onClick, disabled }) => {
    return (
        <PreviousNextButton onClick={onClick} disabled={disabled}>
            {text}
        </PreviousNextButton>
    );
};

export default PaginationButton;
