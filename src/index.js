import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';


/*function getUrlVars() {
	var urlPath = document.location.pathname;
  var hFile = (urlPath.indexOf('ecom') !== -1) ? 'admin' : 'client';
  return hFile
}*/


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);



   render( 
    <Provider store={store}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </Provider>, document.getElementById('root')
  )
   
serviceWorker.unregister();