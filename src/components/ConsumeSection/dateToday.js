import React from 'react';
import styled from '@emotion/styled';

const DateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const TodayText = styled.span`
    // Estilos adicionais se necessário
`;

const DateText = styled.span`
    // Estilos adicionais se necessário
`;

const IconWrapper = styled.div`
    width: ${props => props.size || '40px'};
    height: ${props => props.size || '40px'};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 100%;
        height: 100%;
    }
`;

const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const monthName = months[date.getMonth()]; 
    const year = date.getFullYear();
    return `${day} de ${monthName} de ${year}`;
}

const DateToday = ({ icon, size }) => {
    const today = new Date();
    return (
        <DateContainer>
            <IconWrapper size={size}>{icon}</IconWrapper>
            <TodayText>Hoje</TodayText>
            <DateText>{formatDate(today)}</DateText>
        </DateContainer>
    );
};

export default DateToday;
