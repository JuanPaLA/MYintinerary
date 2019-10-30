import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../Login/login';
import ccAccount from '../CreateAccount/createaccount';
import App from '../../App';
import Cities from '../Cities/cities';

const Routes  = (props) => {

    return(
      
        <Router>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/c-account" component={ccAccount}/>
            <Route path="/cities" component={Cities}/>
          </Switch>
        </Router>
    )
  }


export default Routes; 