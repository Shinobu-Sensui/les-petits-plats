import Categories from "../../models/home/Categories.js";
import Dropdown from "../../templates/home/Dropdown.js";

const recipes_DOM = document.querySelector(".recipes");
const containerDropdown = document.createElement("div");

containerDropdown.classList.add("container-dropdown");

const displayDropdown = () => {
  const categories = new Categories().categories;

  categories.forEach((category) => {
    const categoryHTML = new Dropdown(category).createDropDown();
    containerDropdown.innerHTML += categoryHTML;
  });

  const countRecipesElement = document.createElement("div");
  countRecipesElement.classList.add("countRecipe");
  containerDropdown.appendChild(countRecipesElement);
  recipes_DOM.appendChild(containerDropdown);
};

export default displayDropdown;
