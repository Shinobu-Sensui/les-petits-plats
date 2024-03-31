export default class RecipesCard {
  constructor(recipe) {
    this.recipe = recipe;
    this.imgPath = "./assets/home/images/recipes";
  }

  createImageElement() {
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = `${this.imgPath}/${this.recipe.img}`;
    img.alt = "Card image cap";
    return img;
  }

  createCardBody() {
    const body = document.createElement("div");
    body.classList.add("card-body");

    const recipeTime = document.createElement("div");
    recipeTime.classList.add("recipeTime");
    const recipeTimePlural = this.recipe.time < 2 ? "" : "s"
    recipeTime.textContent = this.recipe.time + "min" + recipeTimePlural;
    body.appendChild(recipeTime);

    const recipeCategory = document.createElement("h6");
    recipeCategory.classList.add("category");
    recipeCategory.textContent = "RECETTE";

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = this.recipe.name;

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = this.recipe.description;

    body.appendChild(title);
    body.appendChild(recipeCategory);
    body.appendChild(description);

    return body;
  }

  createIngredientsList(ingredients) {
    const container = document.createElement("div");
    container.classList.add("ingredients-container");

    const ingredientCategory = document.createElement("h6");
    ingredientCategory.classList.add("category");
    ingredientCategory.textContent = "INGRÉDIENTS";
    container.appendChild(ingredientCategory);

    ingredients.forEach((ingredient) => {
      const ingredientDiv = document.createElement("div");
      ingredientDiv.classList.add("ingredient-container");

      const title = document.createElement("div");
      title.classList.add("ingredient-title");
      title.textContent = ingredient.ingredient;

      const quantity = document.createElement("div");
      quantity.classList.add("ingredient-quantity");

      const isIngredientUnit = ingredient.unit ? ingredient.unit : "";
      quantity.textContent = `${ingredient.quantity} ${isIngredientUnit}`;
      ingredientDiv.appendChild(title);
      ingredientDiv.appendChild(quantity);
      container.appendChild(ingredientDiv);
    });

    return container;
  }

  createRecipeCard() {
    const card = document.createElement("div");
    card.classList.add("card");

    card.appendChild(this.createImageElement());
    card.appendChild(this.createCardBody());
    card.appendChild(this.createIngredientsList(this.recipe.ingredients));

    return card;
  }
}
