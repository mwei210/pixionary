import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    if (!this.props.user) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        {this.props.user.username}
      </div>
    );
  }
}

export default UserShow;
