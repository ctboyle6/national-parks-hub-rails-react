// React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import Home from "../components/Home";
import Parks from "../components/Parks";

const reducers = combineReducers({
  user: userReducer,
  parks: parksReducer,
  park: parkReducer,
  reviews: reviewsReducer
})

const middlewares = applyMiddleware(logger, reduxPromise, thunk);

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path='/parks' exact component={Parks} />
      <Route exact path="/parks/:id" component={Park}/>
    </Switch>
  </Router>
);