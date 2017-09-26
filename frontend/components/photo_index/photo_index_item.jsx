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
        <div className="index-item-info">
          <div className="index-item-category">Title:</div>
          <div className="index-item-copy">
            {title || "Untitled"}
          </div>
          <div className="index-item-category">Description:</div>
          <div className="index-item-copy">{description}</div>
        </div>
        <img onClick={this.handleClick} src={url}/>
      </div>
    );
  }
}

export default withRouter(PhotoIndexItem);
