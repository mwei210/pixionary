export const fetchFeedPhotos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/photos'
  })
);

export const fetchUserPhotos = userId => (
  $.ajax({
    method: 'GET',
    url: `api/photos?id=${userId}`,
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const createPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: `api/photos`,
    data: { photo }
  })
);
