import React from 'react';
import styled from '@emotion/styled';

const Label = styled.span`
    display: flex;
    flex-direction: column;
`;

const ExerciseName = styled.div`
    margin-bottom: 4px;
    display: inline-block;
    background-color: #C55FFF;
    color: #232323;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
`;

const Duration = styled.div`
    font-size: 14px;
`;

const ExerciseLabel = ({ exerciseName, completedDuration, plannedDuration }) => {
    return (
        <Label>
            <ExerciseName>{exerciseName}</ExerciseName>
            <Duration>{completedDuration} de {plannedDuration} min</Duration>
        </Label>
    );
};

export default ExerciseLabel;