import { connect } from 'react-redux';

import { fetchUserPhotos } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';
import PhotoIndex from './photo_index';

const mapStateToProps = state => ({
  photos: selectAllPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUserPhotos: id => dispatch(fetchUserPhotos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
