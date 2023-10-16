import styled from '@emotion/styled';

const CustomSubmitButton = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
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

export default function SubmitButton({ children, icon: Icon, ...props }) {
    return (
        <CustomSubmitButton type="submit" {...props}>
            {Icon && <Icon />}
            {children}
        </CustomSubmitButton>
    );
}

