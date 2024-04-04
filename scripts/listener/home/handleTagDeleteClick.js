import displayRecipesCards from "../../display/home/recipesCards.js";
import { findRecipesByTags } from "../../function/searchByTags.js";

const handleTagDeleteClick = (props) => {
  if (!props) return;
  const { element, tagSelected, tagElement, value, currentSearch } = props;

  tagElement.addEventListener("click", (e) => {
    const elementSVG = element.querySelector("svg");
    tagElement.remove();
    if (elementSVG) {
      element.removeChild(elementSVG);
      element.style.backgroundColor = "#FFF";
      element.style.fontWeight = "";
    }
    tagSelected.delete(value);
    const dataTagsMatched = findRecipesByTags(currentSearch, tagSelected);
    displayRecipesCards(dataTagsMatched, { origin: "tag" });
  });
};

export default handleTagDeleteClick;
