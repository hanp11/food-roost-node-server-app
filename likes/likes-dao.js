import likesModel from "./likes-model.js";

export const userLikesRecipe = async (uid, rid) =>
    await likesModel.create({user: uid, recipe: rid});

export const userUnlikesRecipe = async (uid, rid) =>
    await likesModel.deleteOne({user: uid, recipe: rid});

export const findRecipesLikedByUser = async(uid) => {
  return await likesModel
  .find({user: uid}, {user: false})
  .populate('recipe', 'label')
  .exec()
}

export const findUsersThatLikeRecipe = async(rid) => {
  return await likesModel.find({recipe: rid}, {recipe: false})
  .populate('user', ['fullName', 'username'])
  .exec()
}

export const findAllLikes = async () =>
    await likesModel.find()