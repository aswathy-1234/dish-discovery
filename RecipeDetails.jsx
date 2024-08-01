import React from 'react';
import './App.css';

const RecipeDetails = ({ recipe, onBack }) => {   
  const getIngredients = (recipe) => { // Helper function to get ingredients from the recipe object
    let ingredients = []; // Initialize an empty array to store ingredients
    for (let i = 1; i <= 20; i++) { // Loop through possible ingredient numbers
      const ingredient = recipe[`strIngredient${i}`]; // Get the ingredient from the recipe
      const measure = recipe[`strMeasure${i}`]; // Get the measurement from the recipe
      if (ingredient) ingredients.push(`${ingredient} - ${measure}`); // If ingredient exists, add it to the array

    }
    return ingredients; // Return the array of ingredients
  };
  return (
    <div className="recipe-details">
      <h2>{recipe.strMeal}</h2> {/* Display the recipe name */}
      <div className="row">  {/* Container for image and ingredients */}
        <div className="recipe-image-container">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" /> 
        </div>
        <div className="ingredients-container"> 
          <div className="ingredients-box">
            <h3>Ingredients</h3>
            <ul style={{ listStyle: 'none' }}>  {/* List of ingredients without bullets */}
  {getIngredients(recipe).map((ingredient, idx) => ( // Map over ingredients array

    <li key={idx}>{ingredient}</li> // Display each ingredient key foe each ingredients to list also react to understand
   
  ))}
</ul>
          </div>
        </div>
      </div>
      <div className="instructions-box">
        <h3>Preparation Method</h3>
        <p>{recipe.strInstructions}</p> {/* Display preparation instructions */}
      </div>
      <button onClick={onBack} className="back-button">Back To Search Results</button> {/* Button to go back to search results */}
    </div>
  );
};

export default RecipeDetails;

