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
      users: [],
      activeUser: {}
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

  activeUser = data => {
    this.setState({ activeUser: data });
    console.log(this.state.activeUser.fName);
  };

  writeUserData = (userId, fName, lName, email, password) => {
    fire
      .database()
      .ref(userId)
      .set({
        email: email,
        fName: fName,
        lName: lName,
        password: password
      });
  };

  getUserData = async () => {
    return await fire
      .database()
      .ref()
      .once('value')
      .then(snapshot => {
        var promise = snapshot.val();
        return promise;
      });
  };

  render() {
    this.writeUserData(
      1,
      'Rotem',
      'Drori',
      'RotemSpivak@gmail.com',
      'password'
    );
    return (
      <div className='App'>
        {this.state.userLog ? (
          <Home Users={this.state.Users} activeUser={this.state.activeUser} />
        ) : (
          <Authentication
            writeUserData={this.writeUserData}
            getUserData={this.getUserData}
            activeUser={this.activeUser}
          />
        )}
      </div>
    );
  }
}

export default App;
