const express=require("express")
const router=express.Router()

const{getOneRecipe,updateRecipe,deleteRecipe,getRecipe,createRecipe,getRecipesWithIngredient}=require("../controllers/RecipeController")
router.get("/getRecipe",getRecipe)
router.post("/createRecipe",createRecipe)
router.get("/getRecipeById/:id",getOneRecipe)
router.put("/updateRecipe/:id",updateRecipe)
router.delete("/deleteRecipe/:name",deleteRecipe)
router.get("/getRecipesWithIngredient", getRecipesWithIngredient)


module.exports=router