import recipesModel from "./recipes-model.js";

export const findRecipeById = async (rid) => await recipesModel.findById(rid);

export const findRecipeByEdamamId = async (edamamId) => await recipesModel.findOne({edamamId});

export const findAllRecipes = async () => await recipesModel.find();

export const createRecipe = async (recipe) => await recipesModel.create(recipe);