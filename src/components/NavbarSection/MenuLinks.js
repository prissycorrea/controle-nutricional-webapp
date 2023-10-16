/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    align-items: center;
    color: #f9f9f9;
    display: flex;
    font-weight: 600;
    gap: 10px;
    text-decoration: none;
    position: relative;

    &::before {
        background-color: #C55FFF;
        border-radius: 30%;
        bottom: -6px;
        content: "";
        height: 3px;
        left: 50%;
        position: absolute;
        right: 50%;
        transition: left 0.3s ease-out, right 0.3s ease-out;
    }

    &:hover {
        color: #CBFF45;

        &::before {
            left: 0;
            right: 0;
        }
    }
`;


const MenuLink = ({ icon: Icon, text, to }) => {
    return (
        <StyledLink to={to}>
            <Icon />
            {text}
        </StyledLink>
    );
};

export default MenuLink;
