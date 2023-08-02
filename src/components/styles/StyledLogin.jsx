"use client"
import styled from "styled-components";


export const StyledLoginPage= styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const StyledLoginBox= styled.div `
    display: flex;
    flex-direction: row;
    align-content: space-evenly;
    align-items: center;
    margin-top: 15%;
    width: 50vw;
    height: 40vh;
    border: 3px solid #06004b;
    box-shadow: 12px 12px 12px 1px #ECFAFF;
    
`
export const StyledLoginTitle= styled.div `
    display: flex;
    align-content: center;
    background-color: #06004b;
    color: white;
    height: 40vh;
    width: 25vw;
`
export const StyledLoginInput = styled.input `
    border: 2px solid #06004b;
    margin-bottom: 14px;
    height: 8vh;
    width: 15vw;
`

export const StyledLoginButton = styled.button `
    background-color: #06004b;
    color: white;
`

export const StyledRHS = styled.div `
    height: 20vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`