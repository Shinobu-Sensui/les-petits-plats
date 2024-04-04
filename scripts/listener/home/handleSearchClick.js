import displayRecipesCards from "../../display/home/recipesCards.js";
import { addCategoriesElements } from "../../function/categoriesElements.js";
import {
  findRecipesAndIngredients,
  findRecipesAndIngredientsFilter,
} from "../../function/mainBarSearch.js";
import CategoriesElements from "../../templates/home/CategoriesElements.js";

let responseSearch = null;
let currentSearch = null;

const searchListener = (data) => {
  if (!currentSearch) currentSearch = data;
  const searchIcon = document.querySelector(".search-icon");
  const categoriesElements = new CategoriesElements();
  if (!responseSearch) responseSearch = addCategoriesElements(data);
  searchIcon.addEventListener("click", (e) => {
    let value = document.querySelector(".search").value.toLowerCase();
    document.querySelectorAll(".container-categories").forEach((element) => {
      element.querySelectorAll("*").forEach((childElement) => {
        childElement.removeEventListener("click", handleDelete);
      });

      element.innerHTML = "";
    });
    const containerRecipesCards = document.querySelector(
      ".container-recipesCards"
    );
    containerRecipesCards.innerHTML = "";
    const dataMatched = findRecipesAndIngredients(data, value);
    const dataMatchedFilter = findRecipesAndIngredientsFilter(data, value);

    displayRecipesCards(dataMatched, { origin: "mainBarSearch", value });
    const elementsMatched = addCategoriesElements(dataMatched);
    categoriesElements.pushInCategory(elementsMatched);
    currentSearch = dataMatched;
    responseSearch = elementsMatched;
  });
};

const handleDelete = () => true;
const getResponseSearch = () => responseSearch;
const getCurrentSearch = () => currentSearch;

export { searchListener, getResponseSearch, getCurrentSearch };
