import styled from "styled-components"

type clickedButtonProps = {
    isSelect: boolean;
}

export const clickedButton = styled.button<clickedButtonProps>`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
`;

