import handleDropdownButtonClick from "./home/handleDropdownButtonClick.js";
import handleSearchCategoriesKeyup from "./home/handleSearchCategoriesKeyup.js";
import { searchListener, getResponseSearch } from "./home/handleSearchKeyup.js";

export const loadListener = (data, dataCategoriesElements) => {
  searchListener(data);
  handleDropdownButtonClick();
  handleSearchCategoriesKeyup(dataCategoriesElements);
};
