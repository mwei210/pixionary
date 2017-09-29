import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="welcome-images">
    <div className="welcome-text">
      Share photos with other visionaries.
    </div>
    <Link className="welcome-link" to="/signup">
      Join Pixionary
    </Link>
  </div>
)

export default Welcome;
