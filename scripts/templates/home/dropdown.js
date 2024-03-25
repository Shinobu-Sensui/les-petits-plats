import { dropdownSVG } from "../../svg/home/dropdown.js";

export default class Dropdown {
  constructor(category) {
    this.category = category;
  }

  createDropDown() {
    return `
    <div class="dropdown" data-category="${this.category.idName}">
      <button type="button" class="dropbtn">${this.category.recipeName}
        <span class="dropdownSVG"> ${dropdownSVG()}</span>
      </button>
      
      
    </div>
    `;
  }
}
