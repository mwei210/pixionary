import React from 'react';
import { withRouter } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos(this.props.match.params.userId);
  }

  render() {
    console.log(this.props);
    if (!this.props.photos) {
      return (<div>Loading...</div>);
    }
    return (
      <div className="photo-index">
        { this.props.photos.map(photo => (
          <PhotoIndexItem
            photo={photo}
            key={photo.id}
          />
        )) }
      </div>
    );
  }

}

export default withRouter(PhotoIndex);
