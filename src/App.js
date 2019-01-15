import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Login from './Login'
import Home from './Home'
import AuthenticatedRoute from './AuthenticatedRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AuthenticatedRoute path='/home' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Login}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
