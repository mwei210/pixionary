import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
    };
    this.defaultProps = { errors: [] };
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.history.push("/login");
    let demoUsername = "guest".split("");
    let demoPassword = "password".split("");
    this.setState({ username: "", password: "" });
    let interval = setInterval(() => {
      if (demoUsername.length > 0) {
        this.setState({ username: this.state.username.concat(demoUsername.shift()) });
      }
      else if (demoPassword.length > 0) {
        this.setState({ password: this.state.password.concat(demoPassword.shift()) });
      }
      else {
        clearInterval(interval);
        this.props.processForm(this.state);
      }
    }, 100);
  }

  navLink() {
    if (this.props.formType === "login") {
      return (
        <div className="box-nav-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      );
    }
    else {
      return (
        <div className="box-nav-link">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      );
    }
  }

  renderSignUpFields() {
    if (this.props.formType === "signup") {
      return (
        <div className="signup-form">
          <label>Name:
            <input
              className="auth-fields"
              type="text"
              onChange={this.update("name")}
              value={this.state.name}/>
          </label>
          <br/>
          <label>Email:
            <input
              className="auth-fields"
              type="text"
              onChange={this.update("email")}
              value={this.state.email}/>
          </label>
        </div>
      )
    }
  }

  renderErrors() {
    return (
      <div className="form-error">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          <h2>Welcome to Pixionary!</h2>
          {this.renderErrors()}
          {this.renderSignUpFields()}
          <div className="login-form">
            <label>Username:
              <input
                className="auth-fields"
                type="text"
                onChange={this.update("username")}
                value={this.state.username}/>
            </label>
            <br/>
            <label>Password:
              <input
                className="auth-fields"
                type="password"
                onChange={this.update("password")}
                value={this.state.password}/>
            </label>
            <br/>
            <input className="button" type="submit" value="Submit"/>
            <input
              className="button"
              type="button"
              value="Guest Demo Login"
              onClick={this.handleDemoSubmit}/>
          </div>
          {this.navLink()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
