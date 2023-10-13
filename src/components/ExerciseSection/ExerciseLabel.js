import React from 'react';
import styled from '@emotion/styled';

const Label = styled.span`
    display: inline-block;
    background-color: #C55FFF;
    color: #232323;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
`;

const ExerciseLabel = ({ exerciseName }) => {
    return <Label>{exerciseName}</Label>;
};

export default ExerciseLabel;
