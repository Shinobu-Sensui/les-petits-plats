import { updateRecipesDisplay } from "../../function/recipesCount.js";
import Recipe from "../../models/home/Recipe.js";
import RecipesCard from "../../templates/home/RecipesCard.js";

const containerRecipesCards = document.createElement("div");
const recipes_DOM = document.querySelector(".recipes");

containerRecipesCards.classList.add("container-recipesCards");

const displayRecipesCards = async (recipes, origin) => {
  const recipeNotfound = document.querySelector(".recipeNotFound")
  recipeNotfound && (recipeNotfound.remove())
  recipes.forEach((recipeData) => {
    const recipe = new Recipe(recipeData);
    const recipeCard = new RecipesCard(recipe).createRecipeCard();
    containerRecipesCards.appendChild(recipeCard);
  });

  recipes_DOM.appendChild(containerRecipesCards);
  updateRecipesDisplay(recipes.length, origin);
};

export default displayRecipesCards;
