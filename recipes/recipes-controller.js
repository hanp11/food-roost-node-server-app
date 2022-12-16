import * as recipesDao from './recipes-dao.js';

const RecipesController = (app) => {
  app.get('/api/recipes', findAllRecipes);
  app.get('/api/recipes/:rid', findRecipeById);
  //app.get('/api/recipes/label', findRecipeByLabel);

  app.post('/api/recipes', createRecipe);
}

const findRecipeById = async (req, res) => {
  const rid = req.params.rid;
  const recipe = await recipesDao.findRecipeById(rid);
  if (recipe) {
    res.json(recipe);
    return;
  }
  res.sendStatus(404);
}

const findAllRecipes = async (req, res) => {
  const recipes = await recipesDao.findAllRecipes();
  res.json(recipes);
}

const createRecipe = async (req, res) => {
  const recipe = req.body;
  await recipesDao.createRecipe(recipe);
  const recipes = await recipesDao.findAllRecipes();
  res.json(recipes);
}

export default RecipesController;