const express=require("express")
const router=express.Router()

const{createIngredients,getIngredients}=require("../controllers/IngredientsController")
router.get("/getIngredients",getIngredients)
router.post("/createIngredients",createIngredients)

module.exports=router



