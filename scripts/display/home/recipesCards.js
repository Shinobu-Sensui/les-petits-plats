import Recipe from "../../models/home/Recipe.js";
import Recipes from "../../models/home/Recipes.js";
import RecipesCard from "../../templates/home/RecipesCard.js";

const containerRecipesCards = document.createElement('div')

const recipes_DOM = document.querySelector('.recipes')

containerRecipesCards.classList.add('container-recipesCards')

const displayRecipesCards = async () => {
  const recipes = new Recipes();
  await recipes.getRecipes();
  const recipesData = recipes.recipes;
  
  recipesData.forEach((recipeData) => {
    const recipe = new Recipe(recipeData)
    const recipeCard = new RecipesCard(recipe).createRecipeCard();
    containerRecipesCards.appendChild(recipeCard)
  })

  recipes_DOM.appendChild(containerRecipesCards)
  
};

export default displayRecipesCards;
