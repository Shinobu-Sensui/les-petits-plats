export const findRecipesByTags = (recipes, selectedTags) => {
  selectedTags = [...selectedTags];
  return recipes.reduce((matchingRecipes, recipe) => {
    const { ingredients, ustensils, appliance } = recipe;

    const recipeItems = [
      ...ingredients.map((ingredientDetail) => ingredientDetail.ingredient),
      ...ustensils,
      appliance,
    ];

    const isMatch = selectedTags.every((tag) => recipeItems.includes(tag));
    if (isMatch) matchingRecipes.push(recipe);
    return matchingRecipes;
  }, []);
};
