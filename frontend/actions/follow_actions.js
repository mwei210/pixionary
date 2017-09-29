import * as FollowAPIUtil from '../util/follow_api_util';
import { fetchUser } from './user_actions';

export const createFollow = (follower_id, following_id) => dispatch => (
  FollowAPIUtil.createFollow(follower_id, following_id)
    .then(userId => dispatch(fetchUser(userId)))
);

export const deleteFollow = follow => dispatch => (
  FollowAPIUtil.deleteFollow(follow)
    .then(userId => dispatch(fetchUser(userId)))
);
