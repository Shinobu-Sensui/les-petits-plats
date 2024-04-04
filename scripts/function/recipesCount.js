export const domRecipesCount = (nb, { origin, value }) => {
  const containerRecipesCards = document.querySelector(".container-recipesCards");

  const countElement = document.querySelector(".countRecipe");
  if (!countElement) return;
  const plural = nb > 1 ? "s" : "";
  console.log(containerRecipesCards);
  countElement.innerText = `${nb} recette${plural}`;
  if (nb === 0) {
    let message = [];
    document.querySelector(".search").value = "";
    if (origin === "tag") {
      message.push(`à la selection de vos tags`);
    }

    if (value) {
      message.push(`à votre recherche ${value.italics()}`);
    }
    return (containerRecipesCards.innerHTML = `<div class='recipeNotFound'> Aucune recette ne correspond ${message.join(
      ", "
    )}.</div>`);
  }

  return countElement;
};
