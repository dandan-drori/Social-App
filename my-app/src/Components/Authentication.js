import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import {
  BrowserRouter,
  Switch,
  Route
} from 'C:/Users/dandan/Desktop/Web/React/social-app/Social-App/node_modules/react-router-dom';

export class Authentication extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/signup'>
              <div>
                <SignUp />
              </div>
            </Route>
            <Route path='/'>
              <div>
                <Login />
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Authentication;
