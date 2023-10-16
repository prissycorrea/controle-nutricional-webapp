import styled from '@emotion/styled';

const CustomButton = styled.button`
    background-color: #CBFF45;
    border: none;
    border-radius: 10px;
    color: #000000;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
    padding: 10px 20px;
    transition: 0.3s;

    &:hover {
        background-color: #8EC305;
        transition: 0.3s;
    }
`;

export default function InsertButton({ children, ...props }) {
    return <CustomButton {...props}>{children}</CustomButton>;
}
