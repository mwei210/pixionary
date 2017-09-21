import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="session-links">
    <Link className="login-link" to="/login">Log In</Link>
    &nbsp;
    <Link className="signup-link" to="/signup">Sign up</Link>
  </nav>
);

const personalNav = (currentUser, logout) => (
  <div className="personal-nav">
    <h2 className="header-text">Hi, {currentUser.username}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </div>
);

const Nav = ({ currentUser, logout }) => (
  currentUser ? personalNav(currentUser, logout) : sessionLinks()
);

export default Nav;
