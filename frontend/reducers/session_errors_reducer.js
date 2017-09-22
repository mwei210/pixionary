import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from '../actions/session_actions';

const _nullError = [];

const SessionErrorsReducer = (state = _nullError, action) => {
  debugger;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullError;
    case CLEAR_ERRORS:
      return _nullError;
    default:
      return state;
  }
}

export default SessionErrorsReducer;
