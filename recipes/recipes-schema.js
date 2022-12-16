import mongoose from "mongoose";

const recipesSchema = mongoose.Schema({
  label: {type: String, required: true},
  yield: Number,
  calories: Number,
  ingredients: Array,
  directionsUrl: String,
  edamamId: String
}, {collection: 'recipes'});

export default recipesSchema;