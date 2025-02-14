import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import UsersController from "./users/users-controller.js";
import FollowsController from "./follows/follows-controller.js";
import RecipesController from "./recipes/recipes-controller.js";
import LikesController from "./likes/likes-controller.js";
import RecipeOfTheDayController
  from "./recipe-of-the-day/recipe-of-the-day-controller.js";
import ExpertAdviceController
  from "./expert-advice/expert-advice-controller.js";

//MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
//The connection to localhost is refused on the IPv6 address ::1
//Mongoose per default uses IPv6
//mongoose.connect('mongodb://localhost:27017/tuiter);

//Setting host address 127.0.0.1 instead uses IPv4
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));
//TODO: make session secret environment variable
app.use(session({
  secret: 'xqGmU9#X4N6Urk',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(express.json());

UsersController(app);
FollowsController(app);
RecipesController(app);
LikesController(app);
RecipeOfTheDayController(app);
ExpertAdviceController(app);

app.listen(process.env.PORT || 4000);