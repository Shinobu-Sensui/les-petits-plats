import displayRecipesCards from "../../display/home/recipesCards.js";
import { addCategoriesElements } from "../../function/categoriesElements.js";
import {
  findRecipesAndIngredients,
  findRecipesAndIngredientsFilter,
  findRecipesAndIngredientsFor,
} from "../../function/mainBarSearch.js";
import CategoriesElements from "../../templates/home/CategoriesElements.js";

let responseSearch = null;
let currentSearch = null;

const searchListener = (data) => {
  if (!currentSearch) currentSearch = data;
  const search = document.querySelector(".search");
  const categoriesElements = new CategoriesElements();
  if (!responseSearch) responseSearch = addCategoriesElements(data);
  search.addEventListener("keyup", (e) => {
    let value = document.querySelector(".search").value.toLowerCase();
    if (value.length < 3 & value !== "") return
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
