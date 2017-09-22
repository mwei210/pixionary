export const fetchPhotos = userId => (
  $.ajax({
    method: 'GET',
    url: 'api/photos',
    data: { userId }
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
    url: `api/photos`
  })
);
