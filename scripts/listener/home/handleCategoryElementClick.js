import Tags from "../../templates/home/Tags.js";
import { getCurrentSearch } from "./handleSearchClick.js";
import deleteCategoryElementSVG from "../../svg/home/deleteCategoryElement.js";
import handleTagDeleteClick from "./handleTagDeleteClick.js";
import handleCategoryElementDeleteClick from "./handleCategoryElementDeleteClick.js";
import displayRecipesCards from "../../display/home/recipesCards.js";
import { findRecipesByTags } from "../../function/searchByTags.js";

const tags = new Tags();
const tagSelected = new Set();

const tagStyleSelected = {
  "background-color": "#FFD15B",
  "font-weight": "bold",
};

const handleCategoryElementClick = (element, value) => {
  element.addEventListener("click", (e) => {
    const deleteTag = deleteCategoryElementSVG("15");
    const deleteCategoryElement = deleteCategoryElementSVG("15");
    if (!tagSelected.has(value)) {
      tagSelected.add(value);
      const tagElement = tags.createTagElement(value);
      const currentSearch = getCurrentSearch();
      const dataTagsMatched = findRecipesByTags(currentSearch, tagSelected);
      displayRecipesCards(dataTagsMatched, { origin: "tag" });

      Object.assign(element.style, tagStyleSelected);
      element.appendChild(deleteCategoryElement);
      tagElement.appendChild(deleteTag);

      // event
      handleTagDeleteClick({
        element,
        tagElement,
        tagSelected,
        value,
        currentSearch,
        displayRecipesCards,
      });
      handleCategoryElementDeleteClick({
        deleteCategoryElement,
        element,
        tagElement,
        tagSelected,
        value,
        currentSearch,
        displayRecipesCards,
      });

      const containerTags = document.querySelector(".container-tags");
      containerTags.appendChild(tagElement);
    }
  });
};

export default handleCategoryElementClick;
