export const addCategoriesElements = (data) => {
  return data.reduce(
    (acc, val) => {
      const { ingredients, ustensils, appliance } = val;
      ingredients.forEach((ingredient) =>
        acc.ingredients.add(ingredient["ingredient"])
      );
      ustensils.forEach((ustensil) => acc.ustensiles.add(ustensil));
      acc.appareils.add(appliance);
      return acc;
    },
    { ingredients: new Set(), ustensiles: new Set(), appareils: new Set() }
  );
};


