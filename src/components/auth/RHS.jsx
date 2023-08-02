"use client"
import React, {useState} from "react";
import { StyledLoginInput, StyledRHS , StyledLoginButton} from "../styles/StyledLogin";


export const RHS = (props) => {
    const emailInput = useEmail();
    const passInput = usePassword();

    const handleClick = () => {
        console.log("Login Button Clicked");
    }
    
    return(
        <StyledRHS>
        <StyledLoginInput {...emailInput} placeholder="Username"></StyledLoginInput>
        <StyledLoginInput {...passInput} placeholder="Password"></StyledLoginInput>
        <StyledLoginButton onClick={handleClick}>Log In</StyledLoginButton>
        </StyledRHS>
    )
}

const useEmail = () => {
    const [email, setEmail] = useState('');
    
    function onChange(e) {
        setEmail(e.target.value);
      }

    return{
        email,
        onChange,
    };
};


const usePassword = () => {
    const [password, setPassword] = useState('');
    
    function onChange(e) {
        setPassword(e.target.value);
      }
      
    return{
        password,
        onChange,
    };
};