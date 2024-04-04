import createElement from "../../function/dom/createElement.js";
import handleCategoryElementClick from "../../listener/home/handleCategoryElementClick.js";
import svgSearchCategoryElement from "../../svg/home/searchCategoryElement.js";

export default class CategoriesElements {
  constructor() {}

  addNode(parent, value) {
    const item = createElement("div", {
      innerText: value,
      classList: ["category-item"],
    });
    parent.appendChild(item);
    handleCategoryElementClick(item, value);
  }

  createSearchWithIcon() {
    // Créer un conteneur pour l'input et l'icône
    const searchContainer = createElement("div", {
      classList: ["container-search-category"],
    });

    // Créer l'input de recherche
    const dropdownSearch = createElement("input", {
      classList: "dropdownSearch",
      type: "search",
    });

    // Obtenir l'icône SVG comme élément DOM (assurez-vous que svgSearchCategoryElement retourne un élément DOM)
    const searchCategoryIcon = createElement("div", {
      classList: "searchCategoryIcon",
    });

    searchCategoryIcon.innerHTML = svgSearchCategoryElement();

    // Ajouter l'input et l'icône au conteneur
    searchContainer.appendChild(dropdownSearch);
    searchContainer.appendChild(searchCategoryIcon);

    return searchContainer;
  }

  pushInCategory(data) {
    Object.entries(data).forEach(([category, elements]) => {
      const container = document
        .querySelector(`[data-category="${category}"]`)
        .querySelector(".container-categories");
      if (!container) return;
      elements.forEach((element) => {
        this.addNode(container, element);
      });
    });
  }

  createCategoriesElements(categoriesElements) {
    Object.entries(categoriesElements).forEach(([categorie, elements]) => {
      const btn = document.querySelector(`[data-category="${categorie}"]`);
      if (!btn) return;

      const dropdownContent = createElement("div", {
        classList: ["dropdown-content"],
      });

      // Créer le conteneur de recherche qui inclut l'input et l'icône SVG
      const searchWithIcon = this.createSearchWithIcon();

      dropdownContent.appendChild(searchWithIcon);

      const containerCategoriesElements = createElement("div", {
        classList: "container-categories",
      });

      elements.forEach((element) =>
        this.addNode(containerCategoriesElements, element)
      );

      dropdownContent.appendChild(containerCategoriesElements);

      btn.appendChild(dropdownContent);
    });
  }
}
