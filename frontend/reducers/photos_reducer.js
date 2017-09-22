import merge from 'lodash/merge';
import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO
} from '../actions/photo_actions';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo} );
    default:
      return state;
  }
}

export default PhotosReducer;
