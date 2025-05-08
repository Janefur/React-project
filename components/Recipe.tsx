import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Recipe {
  name: string;
  image: string | undefined;
  difficulty: string;
  instructions: Array<string>;
  ingredients: Array<string>;
  servings: number;
  id: number;
  cookTimeMinutes: number;
  prepTimeMinutes: number;
  mealType: Array<string>;
}

// interface Recipes {
//   recipe: Array<Recipe>
// }

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>(); //<Recipe | null>(null) (?) <Array<Recipe>>([]) Ett recept är ett object?
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [instructionsArray, setInstructionsArray] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/" + id) //`https://dummyjson.com/recipes/${id}`
      .then((response) => response.json())
      .then((result) => {
        setRecipe(result);
        setIngredientsArray(result.ingredients);
        setInstructionsArray(result.instructions);
      });
  }, [recipe, id]);

  return (
    <>
      {recipe !== undefined && (
        <>
          <div className="recipe_header">
            <h1>{recipe.name}</h1>
            <hr />
          </div>
          <div className="recipe_container">
            <div className="info_container">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe_image"
              />
            </div>

            <div className="instruction_container">
              <div className="info">
                <p>
                  <strong>Servings: </strong>
                  {recipe.servings}
                </p>
                <p>
                  <strong>Time to prepare: </strong>
                  {recipe.prepTimeMinutes} minutes
                </p>
                <p>
                  <strong>Cooking time: </strong>
                  {recipe.cookTimeMinutes} minutes
                </p>
                <p>
                  <strong>Total: </strong>
                  {recipe.prepTimeMinutes + recipe.cookTimeMinutes} minutes
                </p>
              </div>
              <div className="ingredients">
                <h2>Ingredients</h2>
                {recipe.ingredients !== null && (
                  <ol>
                    {" "}
                    {ingredientsArray.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ol>
                )}
              </div>
              <div className="instructions">
                <h2>This is how you do it:</h2>
                {recipe.instructions !== null && (
                  <ol>
                    {" "}
                    {instructionsArray.map((instruction, index) => (
                      <li key={index}>
                        <strong>Step {index + 1}</strong> {instruction}
                      </li>
                    ))}{" "}
                  </ol>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Recipe;
