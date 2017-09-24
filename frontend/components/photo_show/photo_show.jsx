import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  render() {
    const photo = this.props.photo;
    const currentUser = this.props.currentUser;
    const title = photo.title ? photo.title : "Untitled";

    if (!photo) {
      return <div>Loading...</div>;
    }

    return (
      <div className="photo-show-container">
        <div className="photo">
          <img src={photo.url} />
        </div>
        <div className="photo-info">
          <div className="photo-author-info">
            {}
          </div>
          <div className="photo-title-info">
            {photo.title}
          </div>
          <div className="photo-description-info">
            {photo.description}
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoShow;
