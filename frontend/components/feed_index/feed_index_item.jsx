import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickToPhotoShow = this.handleClickToPhotoShow.bind(this);
    this.handleClickToUserShow = this.handleClickToUserShow.bind(this);
  }

  handleClickToUserShow() {
    const userId = this.props.photo.author.id;
    this.props.history.push(`/users/${userId}`);
  }

  handleClickToPhotoShow() {
    const photoId = this.props.photo.id;
    this.props.history.push(`/photos/${photoId}`);
  }

  render() {
    const {
      title,
      url,
      description,
      author,
      author: { name, profile_photo_url } } = this.props.photo;
    return (
      <div className="feed-index-item">
        <div className="feed-index-header">
          <div className="feed-user-info">
            <img
              className="feed-user-photo"
              onClick={this.handleClickToUserShow}
              src={profile_photo_url}/>
            <div className="feed-user-name">
              <Link to={`/users/${author.id}`}>
                { name }
              </Link>
            </div>
          </div>
        </div>
        <img
          className="feed-index-photo"
          onClick={this.handleClickToPhotoShow}
          src={url}/>
        <div className="feed-index-footer">
          <div className="feed-photo-title">
            { title }
          </div>
          <div className="feed-index-description">
            { description }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FeedIndexItem);
