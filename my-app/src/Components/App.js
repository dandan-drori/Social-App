import React, { Component } from 'react';
import '../App.css';
import fire from '../config/Fire';
import Home from './Home';
import Authentication from './Authentication';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLog: {},
      users: []
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
      <div className='App'>
        {this.state.userLog ? <Home /> : <Authentication />}
      </div>
    );
  }
}

export default App;
