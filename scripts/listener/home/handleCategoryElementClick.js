import { combineCategoriesElements } from "../../function/categoriesElements.js";
import Tags from "../../templates/home/Tags.js";
import { getResponseSearch } from "./handleSearchClick.js";
import deleteCategoryElementSVG from "../../svg/home/deleteCategoryElement.js";

const tags = new Tags();
const tagSelected = new Set();

const handleCategoryElementClick = (element, value) => {
  element.addEventListener("click", (e) => {
    const dataCategoriesElements = getResponseSearch();
    const formatData = combineCategoriesElements(dataCategoriesElements);
    const deleteTag = deleteCategoryElementSVG();
    const deleteCategoryElement = deleteCategoryElementSVG();

    if (!tagSelected.has(value)) {
      tagSelected.add(value);
      const tagElement = tags.createTagElement(value);
      element.style.backgroundColor = "#FFD15B";
      element.style.fontWeight = "bold"
      element.appendChild(deleteCategoryElement);
      tagElement.appendChild(deleteTag);

      deleteTag.addEventListener("click", (event) => {
        const elementSVG = element.querySelector("svg");
        tagElement.remove();
        if (elementSVG) {
          element.removeChild(elementSVG);
          element.style.backgroundColor = "#FFF";
          element.style.fontWeight = ""
        }
        tagSelected.delete(value);
      });

      deleteCategoryElement.addEventListener("click", (event) => {
        event.stopPropagation();
        const elementSVG = element.querySelector("svg");
        element.removeChild(elementSVG);
        tagElement.remove();
        tagSelected.delete(value);
        element.style.fontWeight = ""
        element.style.backgroundColor = "#FFF";
      });

      const containerTags = document.querySelector(".container-tags");
      containerTags.appendChild(tagElement);
    }
  });
};

export default handleCategoryElementClick;
