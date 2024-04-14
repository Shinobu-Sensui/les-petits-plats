
export const updateRecipesDisplay = (numberOfRecipes, searchContext) => {
  const recipesContainer = document.querySelector(".container-recipesCards");
  const recipesCountElement = document.querySelector(".countRecipe");

  if (!recipesCountElement) return;

  updateRecipesCount(recipesCountElement, numberOfRecipes);
  if (numberOfRecipes === 0) {
    showNoRecipesFoundMessage(recipesContainer, searchContext);
  }
};

const updateRecipesCount = (element, count) => {
  const recipeWord = count > 1 ? "recettes" : "recette";
  element.innerText = `${count} ${recipeWord}`;
};


const showNoRecipesFoundMessage = (container, { origin, value }) => {
  let messages = [];
  document.querySelector(".search").value = "";
  if (origin === "tag") messages.push("à la sélection de vos tags");
  if (value) messages.push(`à votre recherche "${value}"`);

  const combinedMessage = messages.join(", ");
  container.innerHTML = `<div class='recipeNotFound'>Aucune recette ne correspond ${combinedMessage}.</div>`;
};
