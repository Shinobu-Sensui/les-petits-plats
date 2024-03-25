const showRecipesNb = (nb) => {
  const countElement = document.querySelector('.countRecipe')
  if (!countElement) return 
  const plural = nb > 1 ? "s" : "";
  countElement.innerText = `${nb} recette${plural}`;
  return element;
};

export default showRecipesNb;
