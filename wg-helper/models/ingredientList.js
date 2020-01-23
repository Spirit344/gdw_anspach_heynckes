const mongoose = require("mongoose");
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  name: String,
  amount: String,
  done: { type: Boolean, default: false }
});

// Define schema for list items
const listSchema = new Schema({
  name: String,
  recipeId: String,
  ingredients: [ingredientSchema]
});

const list = mongoose.model("List", listSchema);
const ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports.List = list;
module.exports.Ingredient = ingredient;
