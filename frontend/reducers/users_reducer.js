import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default UsersReducer;
