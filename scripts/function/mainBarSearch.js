export const findRecipesAndIngredients = (array, searchValue) => {
  return array.reduce((acc, val) => {
    const { ingredients, description } = val;
    const isValueInIngredients = ingredients.some((ingredient) =>
      ingredient.ingredient.toLowerCase().includes(searchValue)
    );

    const isValueInDescription = description
      .toLowerCase()
      .includes(searchValue);

    if (isValueInIngredients || isValueInDescription) acc.push(val);

    return acc;
  }, []);
};
