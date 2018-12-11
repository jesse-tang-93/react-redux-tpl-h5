import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SiteIndex from '@/pages/site/index'

const App = ()=> (
  <Router basename="/">
    <Switch>
      <Route exact path='/' component={SiteIndex} />
    </Switch>
  </Router>
)
export default App
