import React from "react"
import { StyledLoginPage,StyledLoginBox,StyledLoginTitle} from "../styles/StyledLogin"
import { RHS } from "./RHS"

export const Login = (props) => {
    return(
        <StyledLoginPage>
        <StyledLoginBox>
            <StyledLoginTitle><h2>My Cookbook</h2></StyledLoginTitle>
            <RHS/>
        </StyledLoginBox>
        <p>No Account? Sign in <u> here </u></p>
        </StyledLoginPage>
        
    )
}