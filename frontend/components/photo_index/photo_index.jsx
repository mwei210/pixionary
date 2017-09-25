import React from 'react';
import { PhotoIndexItem } from './photo_index_item';

const PhotoIndex = ({ photos }) => (
  <div>
    <h1>This is the PhotoIndexContainer</h1>
    {photos.map(photo => (
      <PhotoIndexItem
        photo={photo}
        key={photo.id}
      />
    ))}
  </div>
);

export default PhotoIndex;
