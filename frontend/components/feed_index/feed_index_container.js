import { connect } from 'react-redux';

import { fetchFeedPhotos } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';
import FeedIndex from './feed_index';

const mapStateToProps = state => ({
  photos: selectAllPhotos(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchFeedPhotos: () => dispatch(fetchFeedPhotos()),
  createFollow: (follower_id, following_id) =>
    dispatch(createFollow(follower_id, following_id)),
  deleteFollow: id => dispatch(deleteFollow(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
