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
                <SignUp
                  writeUserData={this.props.writeUserData}
                  getUserData={this.props.getUserData}
                />
              </div>
            </Route>
            <Route path='/'>
              <div>
                <Login
                  getUserData={this.props.getUserData}
                  activeUser={this.props.activeUser}
                />
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Authentication;
