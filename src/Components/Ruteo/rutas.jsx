import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../Login/login';
import ccAccount from '../CreateAccount/createaccount';
import App from '../../App';
import Cities from '../Cities/cities';

class Routes extends React.Component {
  constructor () {
    super()
  }

  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/c-account" component={ccAccount}/>
            <Route exact path="/cities" component={Cities}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Routes; 