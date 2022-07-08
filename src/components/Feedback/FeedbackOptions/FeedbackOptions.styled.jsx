import styled from "@emotion/styled";

export const Button = styled.button`
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 10px;
    }

    &:hover {
        background-color: blue;
    }
`;