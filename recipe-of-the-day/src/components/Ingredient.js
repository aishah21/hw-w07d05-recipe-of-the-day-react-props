import React from 'react';


const Ingredient = (props) => {
    const ingredients = props.ingredient;
    
    return (
        <div className="ingredient">
            <ul>
             <li> {ingredients.ingredient}  {ingredients.amount}</li>
            </ul>
        </div>
    )
}

export default Ingredient; 