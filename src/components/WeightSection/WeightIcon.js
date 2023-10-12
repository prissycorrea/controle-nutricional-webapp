import styled from '@emotion/styled';

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const IconWrapper = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #C55FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 70%; 
        height: 70%;
    }
`;

const InfoText = styled.span`
    font-size: 0.8em;
`;

const UserText = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
    color: #EFEEEE;
`;

const WeightIcon = ({ icon, text, subText }) => {
    return (
        <IconContainer>
            <IconWrapper>{icon}</IconWrapper>
            <InfoText>{text}</InfoText>
            <UserText>{subText}</UserText>
        </IconContainer>
    );
};

export default WeightIcon;
