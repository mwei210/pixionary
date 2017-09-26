import values from 'lodash/values';

export const selectAllPhotos = state => values(state.entities.photos);
