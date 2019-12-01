import React, { Component } from 'react';
import { Link } from 'C:/Users/dandan/Desktop/Web/React/social-app/Social-App/node_modules/react-router-dom';
import Button from '@material-ui/core/Button';

export class Drawer extends Component {
  linkStyleChange = () => {
    linkStyle = {
      marginTop: '15px',
      width: '15vw',
      padding: '5px',
      borderRadius: '3px',
      background: 'red'
    };
  };

  linkStyleReturn = () => {
    linkStyle = {
      marginTop: '15px',
      width: '15vw',
      padding: '5px',
      borderRadius: '3px',
      background: 'none'
    };
  };

  render() {
    return (
      <div style={drawerStyle}>
        <Link
          to='/myprofile'
          style={linkStyle}
          onClick={this.rippleEffect}
          data-animation='ripple'
        >
          <i className='far fa-user'></i> My Profile{' '}
          <span className='tooltip'>My Profile</span>
        </Link>
        <Link
          to='/'
          style={{
            marginTop: '30px',
            width: '15vw',
            padding: '5px',
            borderRadius: '3px'
          }}
        >
          <i className='far fa-comments'></i> Live Chat{' '}
          <span className='tooltip'>Live Chat</span>
        </Link>
        <Link
          to='/about'
          style={{
            marginTop: '15px',
            width: '15vw',
            padding: '5px',
            borderRadius: '3px'
          }}
        >
          <i className='fas fa-info'></i> About{' '}
          <span className='tooltip'>About</span>
        </Link>
      </div>
    );
  }
}

const drawerStyle = {
  width: '20vw',
  minHeight: '90vh',
  paddingLeft: '3vw',
  paddingTop: '3vh',
  background: '#E9EBEE',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start'
};

let linkStyle = {
  marginTop: '15px',
  width: '15vw',
  padding: '5px',
  borderRadius: '3px'
};

const links = document.querySelectorAll('[data-animation="ripple"]');

export default Drawer;
