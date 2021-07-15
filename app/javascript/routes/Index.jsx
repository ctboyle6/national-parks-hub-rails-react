// React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Home from "../components/Home";
import Parks from "../components/Parks";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path='/parks' exact component={Parks} />
      <Route exact path="/parks/:id" component={Park}/>
    </Switch>
  </Router>
);