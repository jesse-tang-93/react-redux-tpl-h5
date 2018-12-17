import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configStore from '@/store'

import SiteIndex from '@/pages/site/index'

const store = configStore()

const App = ()=> (
  <Provider store = {store}>
    <Router basename="/">
      <Switch>
        <Route exact path='/' component={SiteIndex} />
      </Switch>
    </Router>
  </Provider>
)
export default App
