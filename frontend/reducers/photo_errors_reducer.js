import {
  RECEIVE_ERRORS,
  RECEIVE_PHOTO,
  CLEAR_ERRORS
} from '../actions/photo_actions';

const _nullError = [];

const PhotoErrorsReducer = (state = _nullError, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_PHOTO:
      return _nullError;
    case CLEAR_ERRORS:
      return _nullError;
    default:
      return state;
  }
}

export default PhotoErrorsReducer;
