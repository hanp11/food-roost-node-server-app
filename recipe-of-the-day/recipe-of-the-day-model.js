import mongoose from "mongoose";
import recipeOfTheDaySchema from "./recipe-of-the-day-schema.js";

const recipeOfTheDayModel = mongoose.model('RecipeOfTheDayModel', recipeOfTheDaySchema);

export default recipeOfTheDayModel;