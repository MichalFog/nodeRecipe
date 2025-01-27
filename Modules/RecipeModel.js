const { default: mongoose } = require("mongoose");
// const { type } = require("server/reply");

const RecipeSchema = new mongoose.Schema({
    name: { type: String, minlength: "3" },
    prepTime: { type: Number, default: 10 },
    category: { type: String, default: 'פרווה' },
    IngredientsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredients" }]  // מערך של הפניות לרכיבים
});

module.exports=mongoose.model("Recipe",RecipeSchema)
