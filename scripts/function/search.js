const clearCards = () => {};

export const findRecipesAndIngredients = (array, searchValue) => {
  return array.reduce((acc, val) => {
    const { ingredients, ustensils, appliance } = val;
    const isValueInIngredients = ingredients.some((ingredient) =>
      ingredient.ingredient.toLowerCase().includes(searchValue)
    );
    const isValueInUstensils = ustensils.find(element => element.toLowerCase() === searchValue);
    const isValueInAppliance = appliance.toLowerCase().includes(searchValue);

    if (isValueInIngredients || isValueInUstensils || isValueInAppliance)
      acc.push(val);

    return acc;
  }, []);
};
