import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
  return {
  photo: state.entities.photo[ownProps.match.params.photoId]
}
};
//   const photo = state.entities.photo[ownProps.match.params.photoId];
//   const author = selectUser(state, state.entities.photo.author_id);
//   return { photo, author };
// };

const mapDispatchToProps = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id)),
  fetchUser: id => dispatch(fetchPhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
