"use client";
import styled from "styled-components";

export const PageTitle = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #06004b;
    hr {
        border: 1px solid #06004b;
        width: 100%
    }
`;

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export const VerticalLine = styled.div `
    width: 50vw;
    border: 0px 0px 0px 2px #06004b;
`