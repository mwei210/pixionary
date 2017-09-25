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
    this.props.history.push(`/photoes/${photoId}`);
  }

  render() {
    const { title, description, url } = this.props.photo;
    const { currentUser } = this.props.currentUser;
    return (
      <div className="photo-index-item" onClick={this.handleClick}>
        <div className="index-item-info">
          <span className="index-item-category">Title:</span>
          <span className="index-item-copy">
            {title || "Untitled"}
          </span>
          <span className="index-item-category">Description:</span>
          <span className="index-item-copy">{description}</span>
        </div>
        <img src={url}/>
      </div>
    );
  }
}

export default withRouter(PhotoIndexItem);
