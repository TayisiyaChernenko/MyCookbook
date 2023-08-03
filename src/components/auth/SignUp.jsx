import React from "react"
import Link from 'next/link'
import { StyledLoginPage,StyledLoginBox,StyledLoginTitle} from "../styles/StyledLogin"
import { SignupRHS } from "./RHS"

export const SignUp = (props) => {
    return(
        <StyledLoginPage>
        <StyledLoginBox>
            <StyledLoginTitle><h2>My Cookbook</h2></StyledLoginTitle>
            <SignupRHS/>
        </StyledLoginBox>
        <p>No Account? Log in <Link href="/">here</Link></p>
        </StyledLoginPage>
        
    )
}