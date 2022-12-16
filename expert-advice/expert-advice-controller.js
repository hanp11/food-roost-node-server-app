import * as expertAdviceDao from './expert-advice-dao.js';

const ExpertAdviceController = (app) => {
  app.post('/api/expertAdvice', createExpertAdvice);

  app.get('/api/expertAdvice/', findAllExpertAdvice);
  app.get('/api/expertAdvice/usernames', findExpertAdviceByUsernames);
}

const createExpertAdvice = async (req, res) => {
  const uid = req.session['currentUser']._id
  const data = req.body
  const actualExpertAdvice = await expertAdviceDao.createExpertAdvice(uid, data.rid, data.date, data.content);
  res.json(actualExpertAdvice);
}

const findAllExpertAdvice = async (req, res) => {
  const recipe = await expertAdviceDao.findAllExpertAdvice();
  res.json(recipe);
}

const findExpertAdviceByUsernames = async (req, res) => {
  const data = req.body
  console.log(data.usernames)
  const expertAdvice = await expertAdviceDao.findExpertAdviceByUsernames(data.usernames);
  res.json(expertAdvice);
}

export default ExpertAdviceController;