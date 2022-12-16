import expertAdviceModel from "./expert-advice-model.js";

export const findExpertAdviceByUsername = async (username) =>
    await expertAdviceModel.find({})