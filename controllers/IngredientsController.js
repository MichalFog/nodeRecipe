const Ingredients=require("../Modules/IngredientsModel")
//create
async function createIngredients(req,res) {
    let newIngredients=await new Ingredients(req.body)
    await newIngredients.save()
    res.send(newIngredients)
}
//read
async function getIngredients(req,res) {
    let allIngredients=await Ingredients.find()
    res.send(allIngredients)
}
module.exports={createIngredients,getIngredients}