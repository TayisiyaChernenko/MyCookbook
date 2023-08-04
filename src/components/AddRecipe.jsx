"use client"
import React,{useState,useMemo} from "react"
import { Nav } from "./Nav"
import { PageTitle,Row } from "./styles/GeneralStyles"
import { Style, BoxStyle, RecipeNameDivStyle,BoxTitleStyle,TagBoxStyle ,TagStyle,SubmitStyle, AddEntryStyle } from "./styles/StyledAddRecipe"
import {IngredientInput, NameInput, StepInput } from "./RecipeInputs"
import { Tag } from "./Tag"

export const NewRecipePage = (props) => {

    const [ingredients, setIngredients] = React.useState(1);
    const [steps, setSteps] = React.useState(1);

    const handleIngredientClick = () => {
        console.log(" Add another Ingredient Button Clicked");
        setIngredients(ingredients + 1);
    }

    const handleStepClick = () => {
        console.log(" Add another Step Button Clicked");
        setSteps(steps + 1);
    }
    const createIngredient  = useMemo(() => {
        console.log("Adding New Ingredient");
        return (
            <>
            {Array(ingredients).fill(ingredients).map((item,index) => (
                <IngredientInput
                key = {`cat-${index}`} //key is need when mapping
                />
            ))}
            </>
        )        
    },[ingredients]);

    const createStep  = useMemo(() => {
        console.log("Adding New Step");
        return (
            <>
            {Array(steps).fill(steps).map((item,index) => (
                <StepInput
                key = {`cat-${index}`} //key is need when mapping
                />
            ))}
            </>
        )        
    },[steps]);

    const handleSaveRecipe = () => {
        console.log("Saving the Recipe");
        //Create Recipe ID tied to UserID and adding Name Info 
        //Create Row in Ingredients Table for every Ingredient Input
        //Create Step in Steps Table for every Step Input
    }

    
    return(
        <div>
        <Nav/>
        <PageTitle>
            <h2>New Recipe</h2>
            <hr/>
        </PageTitle>
       
        <Style>
        <RecipeNameDivStyle>   
            <h3>Recipe Name</h3>
            <NameInput/>
            <SubmitStyle onClick={handleSaveRecipe}>Save Recipe</SubmitStyle>
        </RecipeNameDivStyle> 

        <Row>
            <BoxTitleStyle>
            <h3>Steps</h3>
            <BoxStyle>
                {createStep}
                <AddEntryStyle onClick={handleStepClick}>Add Another</AddEntryStyle>
            </BoxStyle>
            </BoxTitleStyle>
            <BoxTitleStyle>
            <h3>Ingredients</h3>
            <BoxStyle>
              {createIngredient}
              <AddEntryStyle onClick={handleIngredientClick}>Add Another</AddEntryStyle>
            </BoxStyle>
            </BoxTitleStyle>
            <BoxTitleStyle>
            <h3>Tags</h3>
            <TagBoxStyle>
                <Tag tagName="Breakfast"/>
                <Tag tagName="Lunch"/>
                <Tag tagName ="Dinner"/>
                <Tag tagName="Dessert"/>
                <Tag tagName="Seasonal"/>
            </TagBoxStyle>
            </BoxTitleStyle>
        </Row>
        </Style>
        </div>
    )
}