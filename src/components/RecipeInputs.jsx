"use client";
import React, {useState} from "react";
import { AddEntryStyle, IngredientEntryStyle, StepEntryStyle, RecipeNameStyle  } from "./styles/StyledRecipeInputs";

export const IngredientInput = (props) => {
    const ingredientInput = useIngredient();
    const amountInput = useAmount();
    const measurementInput = useMeasurment();
    
    const handleSave= () => {
        console.log("Saving Ingredient Input for ");
        console.log(ingredientInput.ingredient);
        //POST insert into Ingredients 

    }

    return(
        <div>
        <IngredientEntryStyle {...ingredientInput} placeholder="Ingredient"/>
        <IngredientEntryStyle {...amountInput} placeholder="Amount"/>
        <IngredientEntryStyle {...measurementInput} placeholder="Measurement (Opt)"/>
        </div>
    )
}

export const StepInput = (props) => {
    const stepInput = useStep();
    return(
        <StepEntryStyle 
            {...stepInput}
            placeholder="Step" 
            maxLength={500}/>
    )}

export const NameInput = (props) => {
    return(
            <RecipeNameStyle placeholder= "Recipe Name"/>
    )    
}

const useStep = () => {
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


const useIngredient = () => {
    const [ingredient,setIngredientInput] = useState('');
    function onChange(e) {
        setIngredientInput(e.target.value);
    }
    return{
        ingredient,
        onChange
    }
}

const useAmount = () => {
    const [amount,setAmountInput] = useState('');
    function onChange(e) {
        setAmountInput(e.target.value);        
    }
    return{
        amount,       
        onChange
    }
}

const useMeasurment = () => {
    const [measurement,setMeasurementInput] = useState('');
    function onChange(e) {
        setMeasurementInput(e.target.value);       
    }
    return{
        measurement,        
        onChange
    }
}