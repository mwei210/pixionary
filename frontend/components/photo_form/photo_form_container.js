import { connect } from 'react-redux';
import { createPhoto, clearErrors } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const mapStateToProps = state => ({
  errors: state.errors.photoForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearErrors: () => dispatch(clearErrors()),
  createPhoto: photo => dispatch(createPhoto()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoForm);
