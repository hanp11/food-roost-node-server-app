import expertAdviceModel from "./expert-advice-model.js";

export const findAllExpertAdvice = async () =>
    await expertAdviceModel.find()
    .populate('user', ['fullName', 'username'])
    .populate('recipe', ['label', 'edamamId'])
    .exec();

export const findExpertAdviceByUsernames = async (usernames) =>
    await expertAdviceModel.find({'user.username': {$in: usernames}})

export const createExpertAdvice = async (uid, rid, date, content) =>
    await expertAdviceModel.create({user: uid, recipe: rid, date: date, content: content})