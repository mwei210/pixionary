import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  return {
    processForm: user => (formType === "signup") ?
    dispatch(signup(user)) : dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
