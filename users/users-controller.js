import * as userDao from './users-dao.js';

const UsersController = (app) => {
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:uid', findUserById);

  app.post('/api/register', register);
  app.post('/api/login', login);
  app.post('/api/logout', logout);

  app.get('/api/profile', profile);

  app.put('/api/users/:uid', updateUser);
  app.delete('/api/users/:uid', deleteUser);
}

const findUserById = async (req, res) => {
  const uid = req.params.uid;
  const user = await userDao.findUserById(uid);
  if (user) {
    res.json(user);
    return;
  }
  res.sendStatus(404);
}

const findAllUsers = async (req, res) => {
  const users = await userDao.findAllUsers();
  res.json(users);
}

const register = async (req, res) => {
  const user = req.body;
  const existingUser = await userDao.findUserByUsername(user.username);
  if (existingUser) {
    res.status(403).send('Username already exists');
    return;
  }
  const currentUser = await userDao.createUser(user);
  req.session['currentUser'] = currentUser;
  res.json(currentUser);
}

const login = async (req, res) => {
  const credentials = req.body;
  const existingUser = await userDao.findUserByCredentials(
      credentials.username, credentials.password);
  if (existingUser) {
    req.session['currentUser'] = existingUser;
    res.json(existingUser);
    return;
  }
  res.status(403).send('Incorrect username or password');
}

const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
}

const profile = (req, res) => {
  if (req.session['currentUser']) {
    res.send(req.session['currentUser']);
  } else {
    res.sendStatus(403);
  }
}

const updateUser = async (req, res) => {
  const userId = req.params.uid;
  const updates = req.body;
  const existingUser = await userDao.findUserById(userId);
  if (!existingUser) {
    res.status(403).send('User does not exist');
    return;
  }
  await userDao.updateUser(userId, updates);
  const user = await userDao.findUserById(userId);
  res.json(user);
}

const deleteUser = () => {}

export default UsersController;