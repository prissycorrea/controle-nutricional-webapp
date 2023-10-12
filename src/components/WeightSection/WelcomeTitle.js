import styled from '@emotion/styled';
import { getLoggedInUser } from '../../services/userData'

const WelcomeStyle = styled.h2`
    color: #f9f9f9;
    font-size: 1.8em;
`;

const WelcomeTitle = () => {
    const user = getLoggedInUser();
    return <WelcomeStyle>Olá, {user.name}!</WelcomeStyle>;
};

export default WelcomeTitle;
