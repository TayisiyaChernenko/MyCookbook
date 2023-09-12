import React from "react"
import Link from 'next/link'
import { StyledLoginPage,StyledLoginBox,StyledLoginTitle} from "../styles/StyledLogin"
import { SignupAuth } from "./SignUpAuthentication"

//this is a SSR component for the sign-up page, containing all the formatting of the 
//non-interactive parts of the sign-up. The client-side interactive parts are in SignupAuth
export const SignUp = (props) => {
    return(
        <StyledLoginPage>
        <StyledLoginBox>
            <StyledLoginTitle><h2>My Cookbook</h2></StyledLoginTitle>
            <SignupAuth/>
        </StyledLoginBox>
        <p>No Account? Log in <Link href="/">here</Link></p>
        </StyledLoginPage>
        
    )
}