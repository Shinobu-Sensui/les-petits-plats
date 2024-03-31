import displayRecipesCards from "../../display/home/recipesCards.js";
import { addCategoriesElements } from "../../function/categoriesElements.js";
import { findRecipesAndIngredients } from "../../function/Search.js";
import CategoriesElements from "../../templates/home/CategoriesElements.js";

let responseSearch = null;
const searchListener = (data) => {
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
    document.querySelector(".container-recipesCards").innerHTML = "";
    const dataMatched = findRecipesAndIngredients(data, value);
    displayRecipesCards(dataMatched);
    const elementsMatched = addCategoriesElements(dataMatched);
    categoriesElements.pushInCategory(elementsMatched);
    responseSearch = elementsMatched;
  });
};

const handleDelete = () => {
  console.log("supprime!");
};

const getResponseSearch = () => {
  return responseSearch;
};
export { searchListener, getResponseSearch };
