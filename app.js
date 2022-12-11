import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';

//MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
//The connection to localhost is refused on the IPv6 address ::1
//Mongoose per default uses IPv6
//mongoose.connect('mongodb://localhost:27017/tuiter);

//Setting host address 127.0.0.1 instead uses IPv4
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 4000);