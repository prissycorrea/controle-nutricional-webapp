import React from 'react';
import styled from '@emotion/styled';

const ProgressBarContainer = styled.div`
    width: 100%;
    height: ${props => props.height || '30px'};
    background-color: #EFEEEE;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const FilledBar = styled.div`
    height: 100%;
    border-radius: 15px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => {
        if (props.percentage <= 80) return '#4BD061';
        if (props.percentage < 100) return '#FF8D24';
        return '#FF4F4F';
    }};
    width: ${props => props.percentage}%;
`;

const ProgressText = styled.span`
    color: #000000;
    font-weight: 500;
    z-index: 1;
`;

function ProgressBar({ consumed, total, height }) {
    const percentage = (consumed / total) * 100;

    return (
        <ProgressBarContainer height={height}>
            <FilledBar percentage={Math.min(percentage, 100)} />
            <ProgressText>{`${consumed}/${total}`}</ProgressText>
        </ProgressBarContainer>
    );
}

export default ProgressBar;
