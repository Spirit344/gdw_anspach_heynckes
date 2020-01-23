const Model = require("../models/ingredientList");

class IngredientRepository {
  constructor(model) {
    this.model = model;
  }

  findById(id) {
    return this.model.findById(id);
  }

  //update query der datenbank
  async checkIngredient(listId, ingredientId) {
    const query = { _id: listId, "ingredients._id": ingredientId };
    return this.model.updateOne(query, {
      $set: {
        "ingredients.$.done": true
      }
    });
  }
}

module.exports = new IngredientRepository(Model.List);
