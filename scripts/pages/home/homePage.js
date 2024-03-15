import Categories from "../../models/home/Categories.js";
import Dropdown from "../../templates/home/dropdown.js";

const dropdownContainer = document.querySelector(".dropdown-container");

const displayDropdown = () => {
  const categories = new Categories().categories;

  categories.forEach((category) => {
    const categoryHTML = new Dropdown(category).createDropDown();
    dropdownContainer.innerHTML += categoryHTML;
  });
};

export default displayDropdown;
