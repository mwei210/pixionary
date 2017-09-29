import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Welcome from './welcome';
import NavContainer from './nav/nav_container';
import SessionFormContainer from './session_form/session_form_container';
import PhotoFormContainer from './photo_form/photo_form_container';
import PhotoShowContainer from './photo_show/photo_show_container';
import PhotoIndexContainer from './photo_index/photo_index_container';
import UserShowContainer from './user_show/user_show_container';
import FeedIndexContainer from './feed_index/feed_index_container';
import Footer from './footer';

const App = () => (
  <div>
    <header>
      <NavContainer />
    </header>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/photos/create" component={PhotoFormContainer} />
      <ProtectedRoute path="/feed" component={FeedIndexContainer} />
      <Route path="/photos/:photoId" component={PhotoShowContainer} />
      <Route path="/users/:userId" component={UserShowContainer} />
    </Switch>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
