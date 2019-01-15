import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Login from './Login'
import Home from './Home'
import AuthenticatedRoute from './AuthenticatedRoute';
import authReq from './utils/authReq';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      authentication: {
        pending: true,
        user: null
      }
    }
  }

  setAuthentication = claim => {
    this.setState({
      authentication : {
        pending: false,
        user: claim
      }
    })
  }

  componentDidMount(){
    authReq('/auth/token')
    .then(response => this.setAuthentication(response.data))
    .catch(err => this.setAuthentication(null))
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AuthenticatedRoute path='/home' component={Home}/>
          <Route path='/login' render={(props) => <Login {...props} setAuthentication={this.setAuthentication} />} />
          <Route path='/' component={Login}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
