import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App'
import reducers from './reducers';

import { Values } from "redux-form-website-template";

import showResults from "./components/Demographics/showResult";
import SimpleForm from "./components/Demographics/./SimpleForm";




const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
<App/>
  </Provider>,
  document.querySelector('#root'),

);
