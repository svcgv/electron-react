import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <HashRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/detail" component={Detail}/>
      </Switch>
  </HashRouter>
  );
}

export default App;
