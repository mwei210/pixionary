import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: (follower_id, following_id, userId) =>
    dispatch(createFollow(follower_id, following_id, userId)),
  deleteFollow: (follow, userId) => dispatch(deleteFollow(follow, userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow));
