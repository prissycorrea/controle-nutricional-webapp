import styled from '@emotion/styled';

const StyledCard = styled.div`
  background-color: #232323;
  border-radius: 40px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
`;

const Card = ({ width, height, children }) => {
  return <StyledCard width={width} height={height}>{children}</StyledCard>;
};

export default Card;