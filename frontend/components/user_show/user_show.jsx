import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexContainer from '../photo_index/photo_index_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  handleFollow() {
    this.props.createFollow(
      this.props.currentUser.id,
      this.props.user.id,
      this.props.user.id
    );
  }

  handleUnfollow() {
    this.props.deleteFollow({
      follower_id: this.props.currentUser.id,
      following_id: this.props.user.id
    }, this.props.user.id);
  }

  isFollower() {
    return (
      this.props.user.followers.includes(this.props.currentUser.id) ?
        true : false
    )
  }

  followButton() {
    if (this.props.currentUser.id === this.props.user.id) {
      return (
        <div></div>
      )
    }
    else {
      if (this.isFollower()) {
        return (
          <div>
            <button className="button" onClick={this.handleUnfollow}>
              Unfollow
            </button>
          </div>
        )
      }
      else {
        return (
          <div>
            <button className="button" onClick={this.handleFollow}>
              Follow
            </button>
          </div>
        )
      }
    }
  }

  render() {
    if (!this.props.user) {
      return (<div>Loading...</div>);
    }
    const { name, bio, profile_photo_url, followers, followings } = this.props.user;
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
              {followers.length} followers
            </div>
            <div className="following">
              {followings.length} following
            </div>
            {this.followButton()}
          </div>
        </div>
        <PhotoIndexContainer/>
      </div>
    );
  }
}

export default UserShow;
