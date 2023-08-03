"use client"
import React,{useState} from "react";
import { TagStyle, TagSelectedStyle } from "./styles/StyledAddRecipe";

export const Tag = (props) => {
    const [tagSelected, setTagSelected] = useState(false);
    
    const handleClick = () => {
        console.log("Tag Clicked");
        (function(){
            if(tagSelected === true) {
                 setTagSelected(false)
            } else{
                setTagSelected(true);
            }
        })()
    }
    return(
        <div>
        {(function(){
            if(tagSelected === false) {
                return(
                    <TagStyle onClick={handleClick}>{props.tagName}</TagStyle>
                )
            } else{
                return(
                    <TagSelectedStyle onClick={handleClick}>{props.tagName}</TagSelectedStyle>
                )
                }
                })()}
        </div>
    )
}

