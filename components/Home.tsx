import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
//import Greeting from "../components/Greeting";
import Hero from "../components/Hero";

interface Recipe {
  name: string;
  image: string | undefined;
  difficulty: string;
  instructions: string;
  servings: number;
  id: number;
  cookTimeMinutes: number;
  prepTimeMinutes: number;
  mealType: Array<string>;
}

function Home() {
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((result) => {
        setRecipes(result.recipes);
      });
  }, []);

  return (
    <>
      <Hero />
      {recipes.length !== 0 && (
        <div className="card_container">
          {recipes.map((recipe) => (
            <div className="card" key={recipe.id}>
              <img src={recipe.image} alt={recipe.name} />
              <div className="card_content">
                <h3>{recipe.name}</h3>
                {recipe.difficulty === "Easy" ? (
                  <div className="easy">
                    <p>Level of difficulty: Easy </p>
                  </div>
                ) : (
                  <div className="medium">
                    <p>Level of difficulty: Medium </p>
                  </div>
                )}
                <button
                  className="button"
                  onClick={() => navigate(`/recipe/${recipe.id}`)}
                >
                  Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
