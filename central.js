import Recipes from "./scripts/models/home/Recipes.js";
import displayDropdown from "./scripts/pages/home/homePage.js";

const recipes = new Recipes();
await recipes.getRecipes();

displayDropdown();
