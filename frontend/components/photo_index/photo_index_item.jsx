import React from 'react';
import { withRouter } from 'react-router-dom';

import PhotoShowContainer from '../photo_show/photo_show_container';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const photoId = this.props.photo.id;
    this.props.history.push(`/photos/${photoId}`);
  }

  render() {
    const { title, description, url, author, author: { username } } = this.props.photo;
    return (
      <div className="photo-index-item">
        <img className="photo-index-photo" onClick={this.handleClick} src={url}/>
        <div className="index-item-overlay">
          <div className="index-item-title">{title || "Untitled"}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoIndexItem);
