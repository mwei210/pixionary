import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import PhotoErrorsReducer from './photo_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  photoForm: PhotoErrorsReducer
});

export default ErrorsReducer;
