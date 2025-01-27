const mongoose = require("mongoose")
const express = require("express")
const Recipe=require("../Modules/RecipeModel")
const ingredients=require("../Modules/IngredientsModel")

// create
async function createRecipe(req,res) {
    const newRecipe=req.body
    let recipe =await new Recipe(newRecipe)
    await recipe.save()

    await ingredients.findByIdAndUpdate(req.body.IngredientsId,{$push:{arrIngredients:recipe._id}})
    res.send(recipe)
}

// readAll
async function getRecipe(req,res) {
    let allRecipe=await Recipe.find().populate("IngredientsId")
    res.send(allRecipe)
}

// read
async function getOneRecipe(req,res) {
    let oneRecipe=await Recipe.findById(req.params.id)
    res.send(oneRecipe)
}

//update
async function updateRecipe(req,res) {
    Recipe.findByIdAndUpdate(id,req.body,{new:true})
          .then(data=>res.send(data))
          .catch(err=>res.send(err))
}

//delete
async function deleteRecipe(req,res) {
    let nameR=req.params.name
    let r=await Recipe.findOne({name:nameR})
    await Recipe.deleteOne({name:nameR})
    res.send(r+" deleted")
}

async function getRecipesWithIngredient(req,res){
    let Recipes = await Recipe.find().populate("arrIngredients")
    res.send(Recipes)
}
module.exports={getOneRecipe,updateRecipe,deleteRecipe,getRecipe,createRecipe,getRecipesWithIngredient}