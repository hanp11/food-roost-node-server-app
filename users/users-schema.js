import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  email: String,
  fullName: String,
  dateJoined: {type: Date, required: true},
  role: {type: String, enum: ['ADMIN', 'NUTRITIONIST', 'FOODIE']}
}, {collection: 'users'});

export default usersSchema;