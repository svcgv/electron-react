import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Layouts from './layouts'
import Home from './pages/home'
import Password from './pages/password'
import Download from './pages/download'

function App () {
  return (
    <Provider store={store}>
      <Layouts>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/password' component={Password} />
            <Route path='/download' component={Download} />
          </Switch>
        </HashRouter>
      </Layouts>
    </Provider>
  )
}

export default App
