"use client";
import styled from "styled-components";

export const NavStyle = styled.div `
    display: flex;
    flex-direction: row;
    height: 20 hv;
    align-items: center;
    color: white;
    background-color: #06004b;
    margin-bottom: 10 px;
    li{
        list-style-type: none;
        margin: 0rem 3rem;
        }  
    `
export const NavTabStyle = styled.div `
    li{
    list-style-type: none;
    margin: 1rem 1rem;
    color: white;
    }
    ul{
    display: flex;
    flex-direction: column;
    padding: 0;
    }
`
export const TitleStyle = styled.div `
    margin-left: 20px;
`