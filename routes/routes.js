const SpoonacularService = require("../services/spoonacular.service");
const express = require("express");
const app = express.Router();
const repository = require("../repositories/listRepository");

// async und promises nachschlagen!
app.get("/", async (req, res) => {
  console.log("test der api");
  const resp = await SpoonacularService.getRandomRecipes();
  res.send(resp);
});

app.post("/search", async (req, res) => {
  const { search } = req.body;
  const resp = await SpoonacularService.searchRecipe(search);
  res.send(resp);
});

app.get("/ingredients/:id", async (req, res) => {
  console.log("ingredients id");
  const { id } = req.params;
  const resp = await SpoonacularService.getIngredients(id);
  res.send(resp);
});

app.post("/shoppinglist", async (req, res) => {
  const { name, recipeId } = req.body;
  const resp = await SpoonacularService.createList(recipeId, name);
  res.send(resp);
});

app.get("/shoppinglists", async (req, res) => {
  const resp = await SpoonacularService.getLists();
  res.send(resp);
});

app.post("/shoppinglist/checkItem", async (req, res) => {
  const { listId, ingredientId } = req.body;
  await SpoonacularService.checkIngredient(listId, ingredientId);
  const resp = await SpoonacularService.getUncheckIngredients(listId);
  res.send(resp);
});

app.get("/shoppinglist/:id/uncheckedItems", async (req, res) => {
  const { id } = req.params;
  const resp = await SpoonacularService.getUncheckIngredients(id);
  res.send(resp);
});

app.delete("/shoppinglist/:id", async (req, res) => {
  const { id } = req.params;
  const ok = await repository.deleteById(id);
  console.log(ok);
  if (ok) {
    res.send("Successfully deleted!");
  } else {
    res.status(400).send("Could not delete list");
  }
});

module.exports = app;
