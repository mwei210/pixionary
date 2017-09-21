import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: ""
    };
  }
  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up instead</Link>;
    }
    else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          Welcome to Pixionary!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input
                className="login-username"
                type="text"
                onChange={this.update('username')}
                value={this.state.username}/>
            </label>
            <br/>
            <label>Password:
              <input
                className="login-password"
                type="password"
                onChange={this.update("password")}
                value={this.state.password}/>
            </label>
            <br/>
            <input className="form-button" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
