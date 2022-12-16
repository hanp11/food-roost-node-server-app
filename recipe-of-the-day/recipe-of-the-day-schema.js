import mongoose from "mongoose";

const recipeOfTheDaySchema = mongoose.Schema({
  recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'RecipesModel'},
  description: String,
  date: {type: Date, required: true},
}, {collection: 'recipeOfTheDay'});

export default recipeOfTheDaySchema;