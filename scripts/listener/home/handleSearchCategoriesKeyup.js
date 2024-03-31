import { filterCategoriesElements } from "../../function/categoriesElements.js";
import CategoriesElements from "../../templates/home/CategoriesElements.js";
import { getResponseSearch } from "./handleSearchClick.js";

const handleSearchCategoriesKeyup = (dataCategories) => {
  const dropdownSearch = document.querySelectorAll(".dropdownSearch");
  const categoriesElementsInstance = new CategoriesElements();
  dropdownSearch.forEach((element) => {
    element.addEventListener("keyup", (e) => {
      const responseSearch = getResponseSearch(); // Obtenir la valeur actuelle de responseSearch
      let { value } = e.target;
      const grandParentElement = element.parentElement.parentElement;
      const categoryTarget = grandParentElement.getAttribute("data-category");
      const dataCategory = responseSearch
        ? responseSearch[categoryTarget]
        : dataCategories[categoryTarget];
      const containerCategories = grandParentElement.querySelector(
        ".container-categories"
      );

      if (dataCategory) {
        containerCategories.innerHTML = "";
        const resultFilterSearch = filterCategoriesElements(
          dataCategory,
          value
        );
        resultFilterSearch.forEach((filteredElement) => {
          categoriesElementsInstance.addNode(
            containerCategories,
            filteredElement
          );
        });
      }
    });
  });
};

export default handleSearchCategoriesKeyup;
