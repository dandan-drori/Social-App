import React, { Component } from 'react';
import fire from '../config/Fire';
import { Link } from 'C:/Users/dandan/Desktop/Web/React/social-app/Social-App/node_modules/react-router-dom';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fName: '',
      lName: '',
      userIdCounter: this.props.getUserData().then(userObj => {
        return userObj.length;
      })
    };
  }

  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        alert(error);
      });
    this.props.writeUserData(
      // this.state.userIdCounter.then(obj => {
      //   return obj;
      // }),
      1,
      this.state.fName,
      this.state.lName,
      this.state.email,
      this.state.password
    );
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // console.log(this.state.userIdCounter.then(obj => console.log(obj)));
    return (
      <div className='bodyWrapper'>
        <div className='formContainer' style={{ height: '70vh' }}>
          <form onSubmit={this.signup} className='form'>
            <h2>Signup</h2>
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
            <div>
              <input
                type='text'
                name='fName'
                id='fName'
                value={this.state.fName}
                onChange={this.handleChange}
                placeholder='First Name'
                className='fName'
              />
            </div>
            <div>
              <input
                type='text'
                name='lName'
                id='lName'
                value={this.state.lName}
                onChange={this.handleChange}
                placeholder='Last Name'
                className='lName'
              />
            </div>
            <div className='buttons'>
              <button onClick={this.signup} className='signup'>
                <Link to='/' className='signupbuttonlink'>
                  Sign Up
                </Link>
              </button>
            </div>
            <p>
              Already have an account?{' '}
              <Link to='/' className='auth'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
