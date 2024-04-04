import Recipes from "./scripts/models/home/Recipes.js";
import displayDropdown from "./scripts/display/home/dropdown.js";
import displayRecipesCards from "./scripts/display/home/recipesCards.js";
import displayCategoriesElements from "./scripts/display/home/categoriesElements.js";
import { loadListener } from "./scripts/listener/central.js";
import displayTag from "./scripts/display/home/tags.js";

const recipes = await new Recipes().getRecipes();

displayDropdown(recipes.length);
const dataCategoriesElements = displayCategoriesElements(recipes);
displayRecipesCards(recipes, { origin: "started" });
displayTag();
loadListener(recipes, dataCategoriesElements);
