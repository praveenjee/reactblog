import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker'; 
import 'bootstrap/dist/css/bootstrap.css';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import jwtDecode from 'jwt-decode';

import { setCurrentUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import rootReducer from './reducers/index'; 
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore( rootReducer,  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)) );


/*
* If token is available in local storage then set header auth token and set current user
*/
if(localStorage.token) {
  setAuthToken(localStorage.token);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.token)));  
}

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

ReactDOM.render(
	<Provider store={store}><App /></Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
