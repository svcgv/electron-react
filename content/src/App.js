import React from 'react'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Layouts from './layouts'
import Home from './pages/home'
import Password from './pages/password'
import Download from './pages/download'
function App () {
  return (
    <Layouts>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/password' component={Password} />
          <Route exact path='/download' component={Download} />
        </Switch>
      </HashRouter>
    </Layouts>
  )
}

export default App
