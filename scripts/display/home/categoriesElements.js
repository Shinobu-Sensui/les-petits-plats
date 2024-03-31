import { addCategoriesElements } from "../../function/categoriesElements.js";
import CategoriesElements from "../../templates/home/CategoriesElements.js";

const displayCategoriesElements = (data) => {
  const dataElements = addCategoriesElements(data);
  new CategoriesElements().createCategoriesElements(dataElements);
  return dataElements
};

export default displayCategoriesElements;
