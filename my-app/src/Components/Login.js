import React, { Component } from 'react';
import fire from '../config/Fire';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='formContainer'>
        <form onSubmit={this.login} className='form'>
          <h2>Login</h2>
          <i class='fas fa-user-circle fa-6x'></i>
          <div>
            <input
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
              name='email'
              id='email'
              placeholder='Enter email'
              className='email'
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              id='password'
              value={this.state.password}
              onChange={this.handleChange}
              placeholder='Password'
              className='password'
            />
          </div>
          <div className='buttons'>
            <button type='submit' onClick={this.login} className='login'>
              Login
            </button>
            <button onClick={this.signup} className='signup'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
