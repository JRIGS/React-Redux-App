import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk'; 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//used for composing functions right to left (mapping)
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


const rootElement = document.getElementById('root');
ReactDOM.render(
  // Wrapping Provider over App and prop drilling Store
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
