"use client"
import React, {useState} from "react";
import { StyledLoginInput, StyledRHS , StyledLoginButton} from "../styles/StyledLogin";


export const LoginRHS = (props) => {
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


export const SignupRHS = (props) => {
    //const emailInput = useEmail();
    //const passInput = usePassword();
    const firstNameInput = useFirstName();
    const lastNameInput = useLastName();

    const handleClick = () => {
        console.log("Login Button Clicked");
    }

    return(
        <StyledRHS>
        <StyledLoginInput {...firstNameInput} placeholder="First Name"></StyledLoginInput>
        <StyledLoginInput {...lastNameInput} placeholder=" Last Name"></StyledLoginInput>
        <StyledLoginButton onClick={handleClick}>Sign Up</StyledLoginButton>
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

const useFirstName = () => {
    const [firstName, setFirstName] = useState('');
    
    function onChange(e) {
        setFirstName(e.target.value);
      }
      
    return{
        firstName,
        onChange,
    };
};
const useLastName = () => {
    const [lastName, setLastName] = useState('');
    
    function onChange(e) {
        setLastName(e.target.value);
      }
      
    return{
        lastName,
        onChange,
    };
};