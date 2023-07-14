import styled from "styled-components";


export const StyledCheckbox = styled.input`
    appearance: none;
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: ${({ checked, color }) => (checked ? color : "transparent")};
    cursor: pointer;
`;