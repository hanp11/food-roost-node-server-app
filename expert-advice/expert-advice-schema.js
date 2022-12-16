import mongoose from "mongoose";

const expertAdviceSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'UsersModel'},
  recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'RecipesModel'},
  content: String,
  date: Date,
}, {collection: 'expertAdvice'});

export default expertAdviceSchema;