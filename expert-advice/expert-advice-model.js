import mongoose from "mongoose";
import expertAdviceSchema from "./expert-advice-schema.js";

const expertAdviceModel = mongoose.model('ExpertAdviceModel', expertAdviceSchema);

export default expertAdviceModel;