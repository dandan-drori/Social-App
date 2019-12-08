import React, { Component } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import Drawer from './Drawer';
import '../App.css';
import FriendsList from './FriendsList';
import {
  BrowserRouter,
  Switch,
  Route
} from 'C:/Users/dandan/Desktop/Web/React/social-app/Social-App/node_modules/react-router-dom';
import MyProfile from './MyProfile';
import About from './About.js';
import fire from '../config/Fire';
import Login from './Login';
import Home from './Home';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLog: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(userLog => {
      //console.log(user);
      if (userLog) {
        this.setState({ userLog });
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({ userLog: null });
        //localStorage.removeItem('user');
      }
    });
  };

  render() {
    return (
      <div className='App'>{this.state.userLog ? <Home /> : <Login />}</div>
    );
  }
}

export default App;
