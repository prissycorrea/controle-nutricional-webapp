import styled from '@emotion/styled';

const LogoImage = styled.img`
    height: 70px;
`

const Logo = ({img}) => {
    return (
        <LogoImage src={img} alt="logo" />
    )
}

export default Logo;