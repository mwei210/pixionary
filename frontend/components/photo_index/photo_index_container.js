import { connect } from 'react-redux';

import { fetchPhotos } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';
import PhotoIndex from './photo_index';

const mapStateToProps = state => ({
  photos: selectAllPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: id => dispatch(fetchPhotos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
