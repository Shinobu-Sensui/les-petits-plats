import { API } from "../../api/api.js";

const recipes = await new API("data/recipes.json").fetch();

export class Recipes {
  constructor() {
    this.recipes = recipes;
  }
}
