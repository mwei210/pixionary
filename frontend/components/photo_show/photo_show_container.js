import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => ({
  photo: state.entities.photos[ownProps.match.params.photoId]
});

const mapDispatchToProps = dispatch => ({
  fetchPhoto: photo => dispatch(fetchPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
