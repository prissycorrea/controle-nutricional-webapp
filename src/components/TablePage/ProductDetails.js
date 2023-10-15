import React from 'react';
import styled from '@emotion/styled';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 75%;
`;

const ProductCard = styled.div`
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #232323;
  width: 200px;
  height: 270px;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  max-height: 150px;
  margin-bottom: 5px;
  max-width: 150px;
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: auto; /* Isso empurra o NutriScore para o fundo */
`;

const ProductTitle = styled.h2`
  color: #EFEFEF;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
  margin-top: auto;
`;

const Badge = styled.span`
  background-color: #EFEFEF;
  padding: 5px 15px;
  border-radius: 20px;
  color: #979393;
`;

const NutriScore = styled.div`
  background-color: #EFEFEF;
  padding: 5px 15px;
  border-radius: 20px;
  color: #979393;
`;

const ProductDetails = ({ productData = {} }) => {
  if (!productData) return null;
  const { 
      image_front_url, 
      product_name, 
      quantity, 
      nutrition_grade_fr 
  } = productData;

  return (
    <ProductsContainer>
      <ProductCard>
          <ProductImage src={image_front_url} alt={product_name} />
          <ProductTitle>
              {product_name} - {quantity}
          </ProductTitle>
          <BadgeContainer>
              <NutriScore>
              <Badge>Nutri score</Badge>
                  {nutrition_grade_fr && nutrition_grade_fr.toUpperCase()}
              </NutriScore>
          </BadgeContainer>
      </ProductCard>
    </ProductsContainer>
  );
}

export default ProductDetails;
