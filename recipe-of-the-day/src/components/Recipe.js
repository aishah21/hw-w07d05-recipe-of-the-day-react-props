import React from 'react';


const Recipe = (props) => {
    const allRecipes = props.recipes;
    console.log(allRecipes);
    return (
        <div className="recipe">
            <p>Name: {allRecipes.name}</p>
            <p>Servings: {allRecipes.servings}</p>
            <p> Category: {allRecipes.category}</p>
        </div>
    )
}

export default Recipe; 