"use client";
import styled from "styled-components";
export const Style = styled.div `
    h3{
        color: #06004b; 
    }
`;

export const RecipeNameDivStyle = styled.div `
    display: flex;
    flex-direction: row;  
    align-items: center; 
`;
export const BoxTitleStyle = styled.div `
    display: flex;
    flex-direction: column;  
    align-items: center; 
`;

export const BoxStyle = styled.div `
    display: flex;
    flex-direction: column;  
    align-items: center; 
    height: 50vh;
    width: 40vw;
    border: 1px solid #06004b; 
    overflow-y: scroll; 

`;

export const TagBoxStyle = styled.div `
    height: 50vh;
    width: 15vw;
    border: none;
    display: flex;
    flex-direction: column; 
    align-items:center;
    justify-content: space-evenly;
`;
export const TagStyle = styled.button `
    height: 6vh;
    width: 10vw;
    background-color: #06004b;
    color: white;
    border-radius: 20px;
`;

export const TagSelectedStyle = styled.button `
    height: 6vh;
    width: 10vw;
    background-color: #cce6ff;
    color: black;
    border-radius: 20px;
`;
export const SubmitStyle = styled.button `
    height: 4vh;
    width: 10vw;
    background-color: #06004b;
    color: white;
`;

export const AddEntryStyle = styled.button `
    color: white ;
    background-color: #06004b;
    margin-left:auto;
    margin-top: auto;
    height : 4vh;
`