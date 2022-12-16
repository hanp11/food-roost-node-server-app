import * as likesDao from './likes-dao.js';

const LikesController = (app) => {
  app.post('/api/users/likes/:rid', userLikesRecipe);

  app.delete('/api/users/unlikes/:rid', userUnlikesRecipe);

  app.get('/api/likes', findAllLikes);
  app.get('/api/users/:uid/likes', findRecipesLikedByUser);
  app.get('/api/recipes/:rid/likes', findUsersWhoLikedRecipe);
}

const userLikesRecipe = async (req, res) => {
  const uid = req.session['currentUser']._id
  const rid = req.params.rid
  await likesDao.userLikesRecipe(uid, rid)
  const likes = await likesDao.findAllLikes()
  res.json(likes)
}

const userUnlikesRecipe = async (req, res) => {
  const uid = req.session['currentUser']._id
  const rid = req.params.rid
  await likesDao.userUnlikesRecipe(uid, rid)
  const likes = await likesDao.findAllLikes()
  res.json(likes)
}

const findAllLikes = async (req, res) => {
  const likes = await likesDao.findAllLikes()
  res.json(likes)
}

const findRecipesLikedByUser = async (req, res) => {
  const uid = req.params.uid
  const recipes = await likesDao.findRecipesLikedByUser(uid)
  res.json(recipes)
}

const findUsersWhoLikedRecipe = async (req, res) => {
  const rid = req.params.rid
  const users = await likesDao.findUsersThatLikeRecipe(rid)
  res.json(users)
}

export default LikesController;