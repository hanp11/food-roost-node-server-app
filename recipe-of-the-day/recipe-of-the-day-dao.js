import recipeOfTheDayModel from "./recipe-of-the-day-model.js";

export const findRecipeOfTheDayById = async (rid) =>
    await recipeOfTheDayModel.findById(rid);

export const findAllRecipeOfTheDay = async () =>
    await recipeOfTheDayModel.find()
    .populate('recipe', ['label', 'edamamId'])
    .exec();

export const createRecipeOfTheDay = async (uid, rid, date) =>
    await recipeOfTheDayModel.create({user: uid, recipe: rid, date: date})