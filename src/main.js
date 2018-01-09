import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

import { receiveData } from './actions/data_actions';
import store from './store/store';

window.receiveData = receiveData;
window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore()
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
})
