import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexContainer from '../photo_index/photo_index_container';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render() {
    if (!this.props.user) {
      return (<div>Loading...</div>);
    }
    const { username, name, email, bio, profile_photo_url } = this.props.user;
    return (
      <div className="user-show-container">
        <div className="user-info-container">
          <img className="profile-photo" src={profile_photo_url}/>
          <div className="profile-name">
            {name}
          </div>
          <div className="profile-bio">
            {bio}
          </div>
          <div className="profile-follows">
            <div className="followers">
              35 followers
            </div>
            <div className="following">
              118 following
            </div>
          </div>
        </div>
        <PhotoIndexContainer/>
      </div>
    );
  }
}

export default UserShow;
