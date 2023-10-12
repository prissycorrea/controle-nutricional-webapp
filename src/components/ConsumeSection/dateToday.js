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

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day} de ${month} de {year}`;
}

const DateToday = ({ icon }) => {
    const today = new Date();
    return (
        <DateContainer>
            {icon}
            <TodayText>Hoje</TodayText>
            <DateText>{formatDate(today)}</DateText>
        </DateContainer>
    );
};

export default DateToday;
