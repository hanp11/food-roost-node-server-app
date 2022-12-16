import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'UsersModel'},
  recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'RecipesModel'},
}, {collection: 'likes'});

export default likesSchema;