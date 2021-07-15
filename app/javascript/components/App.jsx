import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Parks from './Parks/Parks'
import Park from './Park/Park'

const App = () => {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/parks" component={Parks}/>
        <Route exact path="/parks/:id" component={Park}/>
      </Switch>
    </Router>
  )
}

export default App
