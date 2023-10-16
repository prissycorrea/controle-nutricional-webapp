import React from 'react';
import styled from '@emotion/styled';
import nutriScoreA from '../../images/nutriscore/nutriscore-a.svg';
import nutriScoreB from '../../images/nutriscore/nutriscore-b.svg';
import nutriScoreC from '../../images/nutriscore/nutriscore-c.svg';
import nutriScoreD from '../../images/nutriscore/nutriscore-d.svg';
import nutriScoreE from '../../images/nutriscore/nutriscore-e.svg';
import nutriScoreUnknown from '../../images/nutriscore/nutriscore-unknown.svg';

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
  justify-content: center;
  width: 100%;
  margin-top: auto;
`;

const NutriScoreBadge = styled.div`
  width: 110px;  
  height: 60px; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProductTitle = styled.h2`
  color: #EFEFEF;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
  margin-top: auto;
`;

const getImageForNutriScore = grade => {
  if (!grade) return nutriScoreUnknown;

  switch (grade.toLowerCase()) {
    case 'a': return nutriScoreA;
    case 'b': return nutriScoreB;
    case 'c': return nutriScoreC;
    case 'd': return nutriScoreD;
    case 'e': return nutriScoreE;
    default: return nutriScoreUnknown;
  }
}


const ProductDetails = ({ productData = {} }) => {
  if (!productData) return null;
  const { 
      image_front_url, 
      product_name, 
      quantity, 
      nutrition_grade_fr 
  } = productData;

  const nutriScoreImage = getImageForNutriScore(nutrition_grade_fr);

  return (
    <ProductsContainer>
      <ProductCard>
          <ProductImage src={image_front_url} alt={product_name} />
          <ProductTitle>
              {product_name} - {quantity}
          </ProductTitle>
          <BadgeContainer>
          <NutriScoreBadge style={{ backgroundImage: `url(${nutriScoreImage})` }} />
          </BadgeContainer>
      </ProductCard>
    </ProductsContainer>
  );
}

export default ProductDetails;
