import recipesModel from "./recipes-model.js";

export const findRecipeById = async (rid) => await recipesModel.findById(rid);

export const findRecipeByLabel = async (label) => await recipesModel.findOne({label});

export const findAllRecipes = async () => await recipesModel.find();

export const createRecipe = async (recipe) => await recipesModel.create(recipe);