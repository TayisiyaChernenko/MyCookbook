"use client"
import React,{useState,useMemo,useEffect} from "react"
import { Nav } from "./Nav"
import { PageTitle,Row } from "./styles/GeneralStyles"
import { Style, BoxStyle, RecipeNameDivStyle,BoxTitleStyle,TagBoxStyle ,TagStyle,SubmitStyle, AddEntryStyle } from "./styles/StyledAddRecipe"
import {IngredientInput, NameInput, StepInput } from "./RecipeInputs"
import { Tag } from "./Tag"

export const NewRecipePage = (props) => {
    
    // stores the user inputs for each ingredient/step
    const [ingredientValues, setIngredientValues] = useState([{id: 0, i: "", a: "", m: ""}]);
    const [stepValues, setStepValues] = useState([{id : 0, value: "" }]);
    const [inputStepChange,setStepInput] = useState({});
    const [inputIngredientChange,setIngredientInput] = useState({});
    
    // the below 2 functions and cooresponding useEffects exist to update the states for the input boxes
    const handleIngredientChange = (event, ingredientId, section) => {
        const input = {
            id: ingredientId,
            value: event.target.value,
            section: section
        }
        setIngredientInput(input);
      };

    const handleStepChange = (event, stepId) => {
        const input = {
            id: stepId,
            value: event.target.value
        }
        setStepInput(input);
    };

    useEffect(() => {
        if( typeof inputStepChange.id != 'undefined' ){
            const values = [...stepValues];
            values[inputStepChange.id] = inputStepChange;
            setStepValues(values);
        }
    },[inputStepChange])
    
    useEffect(() => {
        if( typeof inputIngredientChange.id != 'undefined' ){
            const values = [...ingredientValues];
            if(inputIngredientChange.section === 0){
                values[inputIngredientChange.id].i = inputIngredientChange.value //changing the ingredient
            }
            else if (inputIngredientChange.section === 1){
                values[inputIngredientChange.id].a = inputIngredientChange.value //changing the amount
            }else{
                values[inputIngredientChange.id].m = inputIngredientChange.value //changing the measurement
            }
            setIngredientValues(values);
        }
    },[inputIngredientChange])
    
    //creates an array for input components
    //one of each input type is the default view when the page is accessed
    const [ingredients, setIngredients] = useState([<IngredientInput key = {0} id={0} handleChange={handleIngredientChange} />]);
    const [steps, setSteps] = useState([<StepInput  key = {0} id={0} handleChange={handleStepChange} />]);
    
    //to save the whole recipe
    const [isSaved, setSaved] = useState(false);

    
    const handleIngredientClick = () => {
        const newEntry =  {id: ingredientValues.length , i: "",a: "",m: ""};
        setIngredients([...ingredients, 
        <IngredientInput 
        key={ingredients.length}
        id={ingredients.length}
        handleChange={handleIngredientChange}
        />]),
        setIngredientValues([...ingredientValues, newEntry]);
    }

    const handleStepClick = () => {
        const newEntry = {id : steps.length, value: ""}
        setSteps([...steps, 
        <StepInput 
        key={steps.length}
        id={steps.length}
        handleChange={handleStepChange}
        />]),
        setStepValues([...stepValues,newEntry])
    }


    const dispIngredient  = useMemo(() => {
        return (
            <>
            {ingredients.map((ingredient,index) => (
                 <div key= {index}>
                {ingredient}
                </div>
            ))}
            </>
        )        
    },[ingredients]);

    const dispStep  = useMemo(() => {
        return (
            <>
           {steps.map((step,index) => (
                 <div key= {index}>
                {step}
                </div>
            ))}
            </>
        )        
    },[steps]);

    const handleSaveRecipe = () => {
        console.log("Saving the Recipe");
        setSaved(true);

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
                {dispStep}
                <AddEntryStyle onClick={handleStepClick}>Add Another</AddEntryStyle>
            </BoxStyle>
            </BoxTitleStyle>
            <BoxTitleStyle>
            <h3>Ingredients</h3>
            <BoxStyle>
              {dispIngredient}
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