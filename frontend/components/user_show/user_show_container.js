import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: (follower_id, following_id) =>
    dispatch(createFollow(follower_id, following_id)),
  deleteFollow: id => dispatch(deleteFollow(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow));
