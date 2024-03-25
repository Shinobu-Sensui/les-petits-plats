const searchInput = document.querySelector(".search");
import displayRecipesCards from "../../display/home/recipesCards.js";
import { findRecipesAndIngredients } from "../../function/Search.js";

const searchListener = (data) => {
  searchInput.addEventListener("keyup", (e) => {
    let { value } = e.target;
    value = value.toLowerCase();
    document.querySelector(".container-recipesCards").innerHTML = "";

    const dataMatched = findRecipesAndIngredients(data, value);
    displayRecipesCards(dataMatched);
  });
};

export default {
  searchListener,
};
