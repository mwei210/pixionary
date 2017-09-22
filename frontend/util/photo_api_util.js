export const fetchPhotos = id => (
  $.ajax({
    method: 'GET',
    url: 'api/photos',
  })
};

export const
