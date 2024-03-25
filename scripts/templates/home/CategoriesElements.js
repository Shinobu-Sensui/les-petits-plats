export default class CategoriesElements {
  constructor() {}

  createElement(tag, properties = {}) {
    const element = document.createElement(tag);
    Object.entries(properties).forEach(([key, value]) => {
      if (key === "classList") {
        if (Array.isArray(value)) {
          value.forEach((className) => element.classList.add(className));
        } else {
          element.classList.add(value);
        }
      } else {
        element[key] = value;
      }
    });
    return element;
  }

  createCategoriesElements(categoriesElements) {
    Object.entries(categoriesElements).forEach(([categorie, elements]) => {
      const btn = document.querySelector(`[data-category="${categorie}"]`);
      if (!btn) {
        console.warn(`Button not found for category: ${categorie}`);
        return;
      }
      const dropdownContent = this.createElement("div", {
        classList: "dropdown-content",
      });

      const dropdownSearch = this.createElement("input", {
        classList: "dropdownSearch",
        type:"search"
      });

      dropdownContent.appendChild(dropdownSearch);

      elements.forEach((element) => {
        const linkElement = this.createElement("a", { innerText: element });
        dropdownContent.appendChild(linkElement);
      });

      btn.appendChild(dropdownContent);
    });
  }
}
