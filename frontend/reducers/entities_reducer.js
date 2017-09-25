import { combineReducers } from 'redux';
import PhotosReducer from './photos_reducer';
import UsersReducer from './users_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotosReducer,
  users: UsersReducer
});

export default EntitiesReducer;
