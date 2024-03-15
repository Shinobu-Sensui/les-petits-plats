export default class Dropdown {
  constructor(category) {
    this.category = category;
  }

  createDropDown() {
    return `
    <div class="dropdown" data-category="${this.category.idName}">
      <button type="button" class="dropbtn">${this.category.recipeName}</button>
    </div>
    `;
  }
}

{
  /* <div class="dropdown-content">
<a href="#">Lien 1</a>
<a href="#">Lien 2</a>
<a href="#">Lien 3</a>
</div> */
}
