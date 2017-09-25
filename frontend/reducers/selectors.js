import values from 'lodash/values';

export const selectAllPhotos = state => values(state.entities.photos);

export const selectUser = (state, id) => {
  return state.entities.users[id];
};
