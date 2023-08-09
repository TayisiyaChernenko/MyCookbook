"use client";
import React, {useState,useEffect} from "react";
import {IngredientEntryStyle, StepEntryStyle, RecipeNameStyle  } from "./styles/StyledRecipeInputs";

export const IngredientInput = ({ id, handleChange }) => {
    return(
        <div>
        <IngredientEntryStyle onChange={event => handleChange(event, id, 0)}  placeholder="Ingredient"/>
        <IngredientEntryStyle onChange={event => handleChange(event, id, 1)}  placeholder="Amount"/>
        <IngredientEntryStyle onChange={event => handleChange(event, id, 2)}  placeholder="Measurement (Opt)"/>
        </div>
    )
}

export const StepInput = ({ id,handleChange }) => {
    return(
        <StepEntryStyle onChange={event => handleChange(event, id)}
        placeholder="Step" 
        maxLength={500}/>
    )}

export const NameInput = (props) => {
    return(
            <RecipeNameStyle placeholder= "Recipe Name"/>
    )    
}
