import React from 'react';
import styled from '@emotion/styled';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  width: 50%;
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
`;

const ProductTitle = styled.h2`
  color: #000;
`;

const Badge = styled.span`
  background-color: #EFEFEF;
  padding: 5px 15px;
  border-radius: 20px;
  margin: 10px 0;
  color: #979393;
`;

const NutriScore = styled.div`
  /* Adicione estilos personalizados aqui */
`;

const NutritionTable = styled.table`
  /* Adicione estilos personalizados aqui */
`;

const IngredientsList = styled.p`
  color: #000;
`;

const Allergens = styled.p`
  color: #000;
`;

const ProductDetails = ({ productData = {} }) => {
  if (!productData) return null;
  const { 
      image_front_url, 
      product_name, 
      brands, 
      quantity, 
      labels_tags, 
      nutrition_grade_fr, 
      ingredients_text, 
      allergens,
      nutriments 
  } = productData;

  return (
      <ProductContainer>
          <ProductImage src={image_front_url} alt={product_name} />
          <ProductTitle>
              {product_name} - {brands} - {quantity}
          </ProductTitle>

          {/* Renderizando as etiquetas do produto */}
          {labels_tags && labels_tags.map((label, index) => 
              <Badge key={index}>{label}</Badge>
          )}

          {/* Renderizando o NutriScore */}
          <NutriScore>
              {nutrition_grade_fr && nutrition_grade_fr.toUpperCase()}
          </NutriScore>

          {/* Renderizando os detalhes da tabela nutricional */}
          <NutritionTable>
              <tbody>
                  <tr>
                      <td>Calorias</td>
                      <td>{nutriments && nutriments.energy_value} {nutriments && nutriments.energy_unit}</td>
                  </tr>
                  <tr>
                      <td>Gorduras</td>
                      <td>{nutriments && nutriments.fat} g</td>
                  </tr>
                  <tr>
                      <td>Proteínas</td>
                      <td>{nutriments && nutriments.proteins} g</td>
                  </tr>
                  {/* Você pode continuar adicionando outras linhas da tabela nutricional conforme necessário */}
              </tbody>
          </NutritionTable>
          
          {/* Renderizando os ingredientes */}
          <IngredientsList>
              Ingredients: {ingredients_text}
          </IngredientsList>
          
          {/* Renderizando os alergênicos */}
          <Allergens>
              Alergênicos: {allergens}
          </Allergens>
      </ProductContainer>
  );
}

export default ProductDetails;
