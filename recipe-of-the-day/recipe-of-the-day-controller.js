import * as recipeOfTheDayDao from './recipe-of-the-day-dao.js';

const RecipeOfTheDayController = (app) => {
  app.post('/api/recipeOfTheDay', userSelectsRecipeOfTheDay);
  app.get('/api/recipeOfTheDay', findAllRecipeOfTheDay);
}

const userSelectsRecipeOfTheDay = async (req, res) => {
  const uid = req.session['currentUser']._id
  const data = req.body
  const actualRecipe = await recipeOfTheDayDao.createRecipeOfTheDay(uid, data.rid, data.date);
  res.json(actualRecipe);
}

const findAllRecipeOfTheDay = async (req, res) => {
  const recipe = await recipeOfTheDayDao.findAllRecipeOfTheDay();
  res.json(recipe);
}

export default RecipeOfTheDayController;