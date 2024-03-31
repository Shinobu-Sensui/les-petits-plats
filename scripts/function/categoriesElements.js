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

export const toggleCategoriesElements = (element) => {
  const dropdownContentElement = element.querySelector(".dropdown-content");
  const dropdownSVG = element.querySelector(".dropdownSVG");

  if (dropdownContentElement.classList.contains("open")) {
    dropdownContentElement.classList.remove("open");
    dropdownSVG.classList.remove("svg-rotate");
  } else {
    dropdownContentElement.classList.add("open");
    dropdownSVG.classList.add("svg-rotate");
  }
};

export const filterCategoriesElements = (data, value) => {
  return [...data].filter((element) => element.toLowerCase().includes(value));
};

export const combineCategoriesElements = (data) => {
  return Object.values(data).reduce((acc, val) => {
    acc.push(...val);
    return acc;
  }, []);
};
