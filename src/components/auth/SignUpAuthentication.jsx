'use client'
import { useRouter } from 'next/navigation'
import React, {useState} from "react";
import { StyledLoginInput, StyledRHS , StyledLoginButton} from "../styles/StyledLogin";


export const SignupAuth = (props) => {
    const emailInput = useEmail();
    const passwordInput = usePassword();
    const password2Input = usePassword2();
    const firstNameInput = useFirstName();

    const handleClick = () => {
        if(passwordInput.password != password2Input.password2){
            // some alert that passwords don't match to the user 
        }
        else{
            
        //auth
        console.log('Some auth function')
        }
    }

    return(
        <StyledRHS>
        <StyledLoginInput {...firstNameInput} placeholder = "First Name"></StyledLoginInput>
        <StyledLoginInput {...emailInput} placeholder="Email"></StyledLoginInput>
        <StyledLoginInput {...passwordInput} placeholder="Password"></StyledLoginInput>
        <StyledLoginInput {...password2Input} placeholder="Consfirm Password"></StyledLoginInput>
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

const usePassword2 = () => {
    const [password2, setPassword] = useState('');
    
    function onChange(e) {
        setPassword(e.target.value);
      }
      
    return{
        password2,
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