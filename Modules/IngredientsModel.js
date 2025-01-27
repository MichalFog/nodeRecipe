const mongoose = require("mongoose");

const IngredientsSchema = new mongoose.Schema({
    nameIngredients: { type: String },
    // arrIngredients:[{type:mongoose.Schema.Types.ObjectId, ref:"Recipe"}]
});
module.exports = mongoose.model("Ingredients", IngredientsSchema)
