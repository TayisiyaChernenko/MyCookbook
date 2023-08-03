"use client"
import React from "react"
import { Nav } from "./Nav"
import { PageTitle,Row } from "./styles/GeneralStyles"
import { Style, BoxStyle, RecipeNameDivStyle,BoxTitleStyle,TagBoxStyle ,TagStyle,SubmitStyle } from "./styles/StyledAddRecipe"
import { AddButton, IngredientInput, NameInput, StepInput } from "./RecipeInputs"
import { Tag } from "./Tag"

export const NewRecipePage = (props) => {
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
            <SubmitStyle>Save Recipe</SubmitStyle>
        </RecipeNameDivStyle> 

        <Row>
            <BoxTitleStyle>
            <h3>Steps</h3>
            <BoxStyle>
                <StepInput/>
                <AddButton/>
            </BoxStyle>
            </BoxTitleStyle>
            <BoxTitleStyle>
            <h3>Ingredients</h3>
            <BoxStyle>
              <IngredientInput/>
              <IngredientInput/>
              <AddButton/>
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