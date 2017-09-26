import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexContainer from '../photo_index/photo_index_container';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    if (!this.props.user) {
      return (<div>Loading...</div>);
    }
    const { username, name, email, bio, profile_photo_url } = this.props.user;
    return (
      <div>
        {username}
        {username}
        {email}
        {bio}
        <PhotoIndexContainer/>
      </div>
    );
  }
}

export default UserShow;
