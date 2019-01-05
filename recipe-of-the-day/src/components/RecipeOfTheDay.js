import React, {Component} from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';


class RecipeOfTheDay extends Component {

     renderIngredients(){
        const allRecipeOfTheDay = recipeOfTheDay.ingredients.map((post, index) => {
            return (
                <Ingredient ingredient={post} key={index}/>
            )
        });
        return allRecipeOfTheDay;
    };

    render() {
      return (
        <div className="ingredient">
            <h1>Recipe of the Day</h1>
            <p>{recipeOfTheDay.name}</p>
            <p>Description:</p>
            <p>{recipeOfTheDay.description}</p>
            <p>Ingredient</p>
            {this.renderIngredients()}
        </div>
      );
    }
  }

  export default RecipeOfTheDay;