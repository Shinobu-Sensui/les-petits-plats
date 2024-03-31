import createElement from "../../function/dom/createElement.js";
import handleCategoryElementClick from "../../listener/home/handleCategoryElementClick.js";

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

      const dropdownSearch = createElement("input", {
        classList: "dropdownSearch",
        type: "search",
      });

      dropdownContent.appendChild(dropdownSearch);

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
