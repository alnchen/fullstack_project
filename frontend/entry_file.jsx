import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.store = store;
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store}/>, root);
});


//testing
import { login, signup, logout } from './actions/session_actions';
window.login = login;
window.signup = signup;
window.logout = logout;