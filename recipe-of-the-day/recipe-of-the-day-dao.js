import recipeOfTheDayModel from "./recipe-of-the-day-model.js";

export const findRecipeOfTheDayById = async (rid) =>
    await recipeOfTheDayModel.findById(rid);

export const findRecipeOfTheDayByDate = async (date) =>
    await recipeOfTheDayModel.findOne({date});

export const createRecipeOfTheDay = async ()