//http framework zum abfragen von URL's
const axios = require("axios");
const listRepository = require("../repositories/listRepository");
const ingredientRepository = require("../repositories/ingredientRepository");
const apikey = "1efb2f9ae6864354b18067f277cc45dd";

class SpoonacularService {
  async getRandomRecipes(number = 5) {
    try {
      const res = await axios.get(
        "https://api.spoonacular.com/recipes/random?number=" +
        number +
        "&apiKey=" +
        apikey
      );

      return res.data.recipes.map(i => ({
        id: i.id,
        image: i.image,
        title: i.title
      }));
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async searchRecipe(search, number = 5) {
    try {
      const res = await axios.get(
        "https://api.spoonacular.com/recipes/search?" +
        "query=" +
        //Leerzeichen + Umlaute encoden
        encodeURIComponent(search) +
        "&number=" +
        number +
        "&apiKey=" +
        apikey
      );
      console.log(res.data);

      return res.data.results.map(i => ({
        id: i.id,
        title: i.title,
        image: "https://spoonacular.com/recipeImages/" + i.image
      }));
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getIngredients(id) {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apikey}`
      );

      return res.data.ingredients.map(i => ({
        name: i.name,
        amount: i.amount.metric.value + " " + i.amount.metric.unit
      }));

    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async createList(recipeId, name) {
    try {
      const ingredients = await this.getIngredients(recipeId);
      return await listRepository.create({
        name,
        recipeId,
        ingredients
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getLists() {
    try {
      const lists = await listRepository.findAll();
      return lists;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getUncheckIngredients(listId) {
    try {
      const list = await listRepository.findById(listId);

      const ingredients = list.ingredients.filter(
        ingredient => !ingredient.done
      );

      const resp = {
        id: list.id,
        name: list.name,
        recipeId: list.recipeId,
        ingredients
      };

      return resp;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async checkIngredient(listId, ingredientId) {
    try {
      await ingredientRepository.checkIngredient(listId, ingredientId);
      return "Checked Ingredient";
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = new SpoonacularService();
