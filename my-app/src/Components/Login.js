import React, { Component } from 'react';
import fire from '../config/Fire';
import { Link } from 'C:/Users/dandan/Desktop/Web/React/social-app/Social-App/node_modules/react-router-dom';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      activeUser: ''
    };
    this.props
      .getUserData()
      .then(obj => {
        return obj[0];
      })
      .then(obj => {
        this.setState({ activeUser: obj });
      });
  }

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        alert(error);
      });
    if (this.state.email === this.state.activeUser.email) {
      this.props.activeUser(this.state.activeUser);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='bodyWrapper'>
        <div className='formContainer'>
          <form onSubmit={this.login} className='form'>
            <h2>Login</h2>
            <i className='fas fa-user-circle fa-6x'></i>
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
            </div>
            <p>
              Don't have an account?{' '}
              <Link to='/signup' className='auth'>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
