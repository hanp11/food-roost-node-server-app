import * as dao from './follows-dao.js';

const FollowsController = (app) => {
  app.post('/api/follows', followUser);
  app.delete('/api/follows/:followId', unfollowUser);
  app.get('/api/users/:followed/followers', findFollowers);
  app.get('/api/users/:follower/following', findFollowing);
}

const followUser = async (req, res) => {
  const follow = req.body;
  const currentUser = req.session['currentUser'];
  follow.follower = currentUser._id;
  await dao.followUser(follow);
  const followed = await dao.findFollowing(currentUser._id);
  res.json(followed);
}

const unfollowUser = async (req, res) => {
  const followId = req.params['followId'];
  await dao.unfollowUser(followId);
  const currentUser = req.session['currentUser'];
  const followed = await dao.findFollowing(currentUser._id);
  res.json(followed);
}

const findFollowers = async (req, res) => {
  const followed = req.params.followed;
  const followers = await dao.findFollowers(followed);
  res.json(followers);
}

const findFollowing = async (req, res) => {
  const follower = req.params.follower;
  const followed = await dao.findFollowing(follower);
  res.json(followed);
}

export default FollowsController;