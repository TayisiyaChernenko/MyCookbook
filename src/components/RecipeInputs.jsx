"use client";
import React, {useState} from "react";
import { AddEntryStyle, IngredientEntryStyle, StepEntryStyle, RecipeNameStyle  } from "./styles/StyledRecipeInputs";

export const IngredientInput = (props) => {
    return(
        <div>
        <IngredientEntryStyle placeholder="Ingredient"/>
        <IngredientEntryStyle placeholder="Amount"/>
        <IngredientEntryStyle placeholder="Measurement (Opt)"/>
        </div>
    )
}

export const StepInput = (props) => {
    const stepInput = useStepInput();
    return(
        <StepEntryStyle 
            {...stepInput}
            placeholder="Step" 
            maxLength={500}/>
    )}


const useStepInput = () => {
    const [stepInput,setStepInput] = useState('');
    const [charCount,setCharCount] = useState(0);
    
    function onChange(e) {
        setStepInput(e.target.value);
        setCharCount(e.target.value.length);
        }
        return{
        stepInput,
        charCount,
        onChange
        }
    }

    export const AddButton = (props) => {
        return(
            <AddEntryStyle>Add Another</AddEntryStyle>
        )
    }

export const NameInput = (props) => {
    return(
        <RecipeNameStyle placeholder= "Recipe Name"/>
    )    
}