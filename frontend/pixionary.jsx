import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as PhotoAPIUtil from './util/photo_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }
  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchPhotos = PhotoAPIUtil.fetchPhotos;
  window.fetchPhoto = PhotoAPIUtil.fetchPhoto;
  window.createPhoto = PhotoAPIUtil.createPhoto;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
