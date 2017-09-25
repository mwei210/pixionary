import React from 'react';
import { Link } from 'react-router';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    return (
      <div>
        This is the User Show page
      </div>
    );
  }
}

export default UserShow;
