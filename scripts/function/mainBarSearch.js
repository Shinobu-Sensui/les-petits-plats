export const findRecipesAndIngredients = (array, searchValue) => {
  console.log(array);
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

export const findRecipesAndIngredientsFilter = (array, searchValue) => {
  return array.filter((val) => {
    const { ingredients, description } = val;
    const isValueInIngredients = ingredients.some((ingredient) =>
      ingredient.ingredient.toLowerCase().includes(searchValue)
    );

    const isValueInDescription = description
      .toLowerCase()
      .includes(searchValue);

    if (isValueInIngredients || isValueInDescription) return val;
    return;
  });
};

