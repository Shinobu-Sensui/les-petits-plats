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

export const findRecipesAndIngredientsFor = (array, searchValue) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const { ingredients, description } = array[i];
    let isValueInIngredients = false;
    for (let j = 0; j < ingredients.length; j++) {
      if (ingredients[j].ingredient.toLowerCase().includes(searchValue)) {
        isValueInIngredients = true;
        break;
      }
    }
    const isValueInDescription = description
      .toLowerCase()
      .includes(searchValue);

    if (isValueInIngredients || isValueInDescription) result.push(array[i]);
  }

  return result;
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

