import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import demo from './reducers'

ReactDOM.render(
  <Provider store={createStore(demo)}>
    <App />
  </Provider>,

  document.getElementById('root')
);

