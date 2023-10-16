import Card from "../Card";
import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as FilterIcon } from '../../images/icons/filter-icon.svg'; // Supondo que você tenha um ícone para o filtro.

const FilterContainer = styled.div`
    padding: 16px;
`;

const FilterTitle = styled.h3`
    display: flex;
    align-items: center;
`;

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 0;
`;

const CheckboxLabel = styled.label`
    margin-right: 8px;
`;

const Filter = () => {
    return (
        <Card width="15%" height="80%">
            <FilterContainer>
                <FilterTitle>
                    <FilterIcon style={{ marginRight: '8px' }} />
                    Filtrar
                </FilterTitle>
                
                <h4>Características:</h4>
                <CheckboxContainer>
                    <CheckboxLabel><input type="checkbox" /> Orgânico</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Sem adição de açúcar</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Sem glúten</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Sem lactose</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Vegano</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Vegetariano</CheckboxLabel>
                </CheckboxContainer>

                <h4>Alergênicos:</h4>
                <CheckboxContainer>
                    <CheckboxLabel><input type="checkbox" /> Amendoim</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Castanhas</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Mariscos</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Trigo</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Soja</CheckboxLabel>
                </CheckboxContainer>

                <h4>Nutri Score:</h4>
                <CheckboxContainer>
                    <CheckboxLabel><input type="checkbox" /> Classificação A</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Classificação B</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Classificação C</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Classificação D</CheckboxLabel>
                    <CheckboxLabel><input type="checkbox" /> Classificação E</CheckboxLabel>
                </CheckboxContainer>
            </FilterContainer>
        </Card>
    );
};

export default Filter;
