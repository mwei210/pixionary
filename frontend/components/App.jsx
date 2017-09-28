import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavContainer from './nav/nav_container';
import SessionFormContainer from './session_form/session_form_container';
import PhotoFormContainer from './photo_form/photo_form_container';
import PhotoShowContainer from './photo_show/photo_show_container';
import PhotoIndexContainer from './photo_index/photo_index_container';
import UserShowContainer from './user_show/user_show_container';
import FeedIndexContainer from './feed_index/feed_index_container';

const App = () => (
  <div>
    <header>
      <NavContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/photos/create" component={PhotoFormContainer} />
      <Route path="/photos/:photoId" component={PhotoShowContainer} />
      <Route path="/users/:userId" component={UserShowContainer} />
      <Route path="/feed" component={FeedIndexContainer} />
    </Switch>
  </div>
);

export default App;
