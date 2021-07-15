// React
import React from "react";
import { render } from "react-dom";

// Style
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Redux
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from '../reducers/user_reducer'
import parksReducer  from '../reducers/parks_reducer'
import parkReducer from '../reducers/park_reducer'
import reviewsReducer from '../reducers/reviews_reducer'
import { logger } from 'redux-logger'
import reduxPromise from 'redux-promise'
import thunk from 'redux-thunk'

// Components
import App from "../components/App";

const reducers = combineReducers({
  user: userReducer,
  parks: parksReducer,
  park: parkReducer,
  reviews: reviewsReducer
})

const middlewares = applyMiddleware(logger, reduxPromise, thunk);

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={createStore(reducers, {}, middlewares)}>
      <Router>
        <Route path="/" component={App}/>
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  );
});