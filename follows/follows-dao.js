import followsModel from "./follows-model.js";

export const followUser = (follow) => followsModel.create(follow)

export const unfollowUser = (followId) => followsModel.deleteOne({_id: followId})

export const findFollowers = (followed) => followsModel.find({followed})
                                            .populate('follower')
                                            .exec();

export const findFollowing = (follower) => followsModel.find({follower})
                                            .populate('followed')
                                            .exec();