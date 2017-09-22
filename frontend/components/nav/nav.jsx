import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <ul className="navbar">
    <li className="home-link">
      <Link to={`/`}>Pixionary</Link>
    </li>
    <div className="auth-links">
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </div>
  </ul>
);

const personalNav = (currentUser, logout) => (
  // <div className="nav-links">
  //   <Link className="home-link" to={`/`}>Pixionary</Link>
  //   <h2 className="header-text">Hi, {currentUser.username}</h2>
  //   <button className="header-button" onClick={logout}>Log Out</button>
  // </div>
  <ul className="navbar">
    <li className="home-link">
      <Link to={`/`}>Pixionary</Link>
    </li>
    <div className="auth-links">
      <li>
        <h3 className="header-links">Hi, {currentUser.username}</h3>
      </li>
      <li>
        <button className="header-links" onClick={logout}>Log Out</button>
      </li>
    </div>
  </ul>
);

const Nav = ({ currentUser, logout }) => (
  currentUser ? personalNav(currentUser, logout) : sessionLinks()
);

export default Nav;
