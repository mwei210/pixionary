import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PhotoShow extends React.Component {
  componentWillMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.photoId !== nextProps.match.params.photoId) {
      this.props.fetchPhoto(nextProps.match.params.photoId);
    }
  }

  render() {
    if (!this.props.photo) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className="photo-show-container">
          <div className="photo">
            <img src={this.props.photo.url} />
          </div>
          <div className="photo-info">
            <div className="photo-author-info">
              {this.props.photo.author.name}
            </div>
            <div className="photo-title-info">
              {this.props.photo.title}
            </div>
            <div className="photo-description-info">
              {this.props.photo.description}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PhotoShow;
