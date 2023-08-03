"use client"
import React from "react"
import {NavStyle,TitleStyle} from "./styles/StyledNav"

export const Nav = (props) => {
     return(
        <div>
            <NavStyle>
                <TitleStyle><h1>My Cookbook</h1> </TitleStyle>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                    <li>Dessert</li>
                    <li>Seasonal</li>
                    <li>Add Recipe</li>
                    <li>Search</li>
            </NavStyle>
        </div>
    )
}
