const express = require('express');
const app = express(); 
const mongoose=require("mongoose")
const recipeRouter=require("./Routers/RecipeRouter")
const ingredientsRouter=require("./Routers/IngredientsRouter")
const fs=require("fs")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
dotenv.config()

app.use(bodyParser.json())

// const connectDb = "mongodb+srv://m0583260035:MPJ1BfFhDqRjwOWD@michal.aq33g.mongodb.net/jewerlly"
const connect=process.env.MONGO_CONNECT
// const connect="mongodb+srv://m0583260035:MPJ1BfFhDqRjwOWD@michal.aq33g.mongodb.net/jewerlly"


mongoose.connect(connect).then(() => {
    console.log('connected')
}).catch(err => { console.log(err) });

app.use("/recipe",recipeRouter )
app.use("/ingredientsForRecipe",ingredientsRouter)

app.listen(process.env.APP_PORT, () => {
    console.log('Server is running on port 8080');
});
