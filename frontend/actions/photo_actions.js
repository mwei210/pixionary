import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchFeedPhotos = () => dispatch => (
  PhotoAPIUtil.fetchFeedPhotos()
    .then(photos => dispatch(receivePhotos(photos)))
);

export const fetchUserPhotos = userId => dispatch => (
  PhotoAPIUtil.fetchUserPhotos(userId)
    .then(photos => dispatch(receivePhotos(photos)))
);

export const fetchPhoto = id => dispatch => (
  PhotoAPIUtil.fetchPhoto(id)
    .then(photo => dispatch(receivePhoto(photo)))
);

export const createPhoto = photo => dispatch => (
  PhotoAPIUtil.createPhoto(photo)
    .then(photo => dispatch(receivePhoto(photo)))
);
