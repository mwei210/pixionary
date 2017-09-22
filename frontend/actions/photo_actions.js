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

export const fetchPhotos = userId => (
  PhotoAPIUtil.fetchPhotos(userId)
    .then(photos => dispatch(receivePhotos(photos)),
    error => dispatch(receiveErrors(error.responseJSON)))
);

export const fetchPhoto = id => (
  PhotoAPIUtil.fetchPhotos(id)
    .then(photo => dispatch(receivePhoto(photo)),
    error => dispatch(receiveErrors(error.responseJSON)))
);

export const createPhoto = photo => (
  PhotoAPIUtil.createPhoto(photo)
    .then(photo => dispatch(receivePhoto(photo)),
    error => dispatch(receiveErrors(error.responseJSON)))
);
