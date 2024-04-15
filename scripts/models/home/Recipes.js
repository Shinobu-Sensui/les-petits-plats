import Api from "../../api/Api.js";

export default class Recipes {
  constructor(url = "./data/recipes/recipes.json") {
    this.url = url;
    this.recipes = null;
  }

  async getRecipes() {
    try {
      this.recipes = await new Api(this.url).fetch();
      return this.recipes;
    } catch (e) {
      console.error(`Error lors de la récupération des recettes : ${e}`);
      this.recipes = null;
      return null;
    }
  }
}
