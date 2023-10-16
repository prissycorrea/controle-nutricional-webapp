import React, { useState } from 'react';
import styled from '@emotion/styled';

const ProfileImage = styled.div`
    width: 50px; 
    height: 50px;
    border-radius: 50%; 
    background-image: url(${props => props.image});
    background-size: cover;
    border: 3px solid #CBFF45; 
    cursor: pointer;
    transition: border-color 0.2s ease-in-out; 

    &:hover {
        border-color: #C55FFF;
        transition: border-color 0.2s ease-in-out; 
    }
`;


const DropdownMenu = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    width: 150px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: ${props => (props.visible ? 'block' : 'none')};
`;

const DropdownItem = styled.a`
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.2s ease-in-out; 
    &:hover {
        background-color: #E8FFAB;
        transition: background-color 0.2s ease-in-out; 
    }
`;

function ProfileDropdown({ image }) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div style={{ position: 'relative' }} onClick={toggleVisibility}>
            <ProfileImage image={image} />
            <DropdownMenu visible={isVisible}>
                <DropdownItem href="#profile">Meu perfil</DropdownItem>
                <DropdownItem href="#settings">Configurações</DropdownItem>
                <DropdownItem href="#help">Ajuda</DropdownItem>
                <DropdownItem href="#logout">Sair</DropdownItem>
            </DropdownMenu>
        </div>
    );
}

export default ProfileDropdown;
