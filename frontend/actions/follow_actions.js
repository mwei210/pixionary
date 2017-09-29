import * as FollowAPIUtil from '../util/follow_api_util';
import { fetchUser } from './user_actions';

export const createFollow = (follower_id, following_id, userId) => dispatch => (
  FollowAPIUtil.createFollow(follower_id, following_id, userId)
    .then(() => dispatch(fetchUser(userId)))
);

export const deleteFollow = (follow, userId) => dispatch => (
  FollowAPIUtil.deleteFollow(follow, userId)
    .then(() => dispatch(fetchUser(userId)))
);
