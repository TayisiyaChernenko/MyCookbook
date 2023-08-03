import React from "react"
import Link from "next/link"
import { StyledLoginPage,StyledLoginBox,StyledLoginTitle} from "../styles/StyledLogin"
import { LoginRHS } from "./RHS"

export const Login = (props) => {
    return(
        <StyledLoginPage>
        <StyledLoginBox>
            <StyledLoginTitle><h2>My Cookbook</h2></StyledLoginTitle>
            <LoginRHS/>
        </StyledLoginBox>
        <p>No Account? Sign in <Link href="/sign-up">here</Link></p>
        </StyledLoginPage>
        
    )
}
