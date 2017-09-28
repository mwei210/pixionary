import { connect } from 'react-redux';

import { fetchPhotos } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';
import FeedIndex from './feed_index';

const mapStateToProps = state => ({
  photos: selectAllPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: id => dispatch(fetchPhotos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
