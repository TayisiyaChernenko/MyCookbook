import React from "react"
import Link from "next/link"
import { StyledLoginPage,StyledLoginBox,StyledLoginTitle} from "../styles/StyledLogin"
import { LoginAuth } from "./LoginAuthentication"
//this is a SSR component for the log-in page, containing all the formatting of the 
//non-interactive parts of the log-in. The client-side interactive parts are in LoginAuth
export const Login = (props) => {
    return(
        <StyledLoginPage>
        <StyledLoginBox>
            <StyledLoginTitle><h2>My Cookbook</h2></StyledLoginTitle>
            <LoginAuth/>
        </StyledLoginBox>
        <p>No Account? Sign in <Link href="/sign-up">here</Link></p>
        </StyledLoginPage>
        
    )
}
