import React, { Component } from 'react';
import '../App.css';
import fire from '../config/Fire';
import Login from './Login';
import Home from './Home';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLog: {}
    };
    this.bodyStyle = {};
  }

  componentDidMount() {
    this.authListener();
    this.bodyStyle = {
      background: '#fff'
    };
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
