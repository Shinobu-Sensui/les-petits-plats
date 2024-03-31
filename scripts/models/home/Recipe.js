export default class Recipe {
    constructor(recipe) {
        this.id = recipe.id, 
        this.img = recipe.image
        this.name = recipe.name
        this.servings = recipe.servings 
        this.ingredients = recipe.ingredients 
        this.description = recipe.description
        this.appliance = recipe.appliance
        this.ustensils = recipe.ustensils
        this.time = recipe.time
    }
}