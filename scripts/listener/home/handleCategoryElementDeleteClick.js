import displayRecipesCards from "../../display/home/recipesCards.js";
import { findRecipesByTags } from "../../function/searchByTags.js";

const handleCategoryElementDeleteClick = ({
  deleteCategoryElement,
  element,
  tagSelected,
  tagElement,
  value,
  currentSearch,
}) => {
  deleteCategoryElement.addEventListener("click", (event) => {
    event.stopPropagation();
    const elementSVG = element.querySelector("svg");
    element.removeChild(elementSVG);
    tagElement.remove();
    tagSelected.delete(value);
    document.querySelector('.container-recipesCards').innerHTML = "";
    const dataTagsMatched = findRecipesByTags(currentSearch, tagSelected);
    displayRecipesCards(dataTagsMatched, "tag");
    element.style.fontWeight = "";
    element.style.backgroundColor = "#FFF";
  });
};

export default handleCategoryElementDeleteClick;
