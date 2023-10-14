import React from 'react';
import styled from '@emotion/styled';

const PlusSign = styled.span`
    font-size: 36px;
    color: #CBFF45;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #8EC305;
    }
`;

const MoreButton = () => {
    return <PlusSign>+</PlusSign>;
};

export default MoreButton;
