import { toggleCategoriesElements } from "../../function/categoriesElements.js";

const handleDropdownButtonClick = () => {
  const dropdownButtons = document.querySelectorAll(".dropbtn");
  if (!dropdownButtons) return;
  dropdownButtons.forEach((button) => {
    button.addEventListener("click", () => {
      toggleCategoriesElements(button.parentElement);
    });
  });
};

export default handleDropdownButtonClick;
