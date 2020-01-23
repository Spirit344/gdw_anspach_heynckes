const Model = require("../models/ingredientList");

class ListRepository {
  constructor(model) {
    this.model = model;
  }

  create(list) {
    const newList = new this.model(list);
    return newList.save();
  }

  findAll() {
    return this.model.find();
  }

  findById(id) {
    return this.model.findById(id);
  }

  deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }
}

module.exports = new ListRepository(Model.List);
