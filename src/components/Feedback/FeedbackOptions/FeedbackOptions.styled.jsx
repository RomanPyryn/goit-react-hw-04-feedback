import styled from "@emotion/styled";

export const Button = styled.button`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;

    &:active {
        background-color: lightcoral;
    }

    &:not(:last-child) {
        margin-right: 10px;
    }
`;