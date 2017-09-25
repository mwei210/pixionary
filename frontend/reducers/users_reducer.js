import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';

const defaultUser = {
  username: "",
  name: "",
  bio: "",
  profile_photo_url: "",
  followers: [],
  following: [],
  photos: []
};

const UsersReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default UsersReducer;
