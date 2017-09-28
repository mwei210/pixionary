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
  <ul className="navbar">
    <li className="home-link">
      <Link to={`/feed`}>Pixionary</Link>
    </li>
    <div className="auth-links">
      <li>
        <Link to={`/users/${currentUser.id}`}>
          Hi, {currentUser.name.split(" ")[0]}
        </Link>
      </li>
      <li>
        <Link to={`/photos/create`}>Upload Photo</Link>
      </li>
      <li>
        <button className="button" onClick={logout}>Log Out</button>
      </li>
    </div>
  </ul>
);

const Nav = ({ currentUser, logout }) => (
  currentUser ? personalNav(currentUser, logout) : sessionLinks()
);

export default Nav;
