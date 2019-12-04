import React, { Component } from 'react';
import { Link } from 'C:/Users/dandan/Desktop/Web/React/social-app/Social-App/node_modules/react-router-dom';
import Button from '@material-ui/core/Button';

export class Drawer extends Component {
  render() {
    return (
      <div style={drawerStyle}>
        <Link to='/myprofile' style={linkStyle} title='My Profile'>
          <i className='far fa-user'></i> My Profile{' '}
        </Link>
        <Link
          to='/'
          style={{
            marginTop: '30px',
            width: '15vw',
            padding: '5px',
            borderRadius: '3px'
          }}
          title='Live Chat'
        >
          <i className='far fa-comments'></i> Live Chat{' '}
        </Link>
        <Link
          to='/about'
          style={{
            marginTop: '15px',
            width: '15vw',
            padding: '5px',
            borderRadius: '3px'
          }}
          title='About'
        >
          <i className='fas fa-info'></i> About{' '}
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

const linkStyle = {
  marginTop: '15px',
  width: '15vw',
  padding: '5px',
  borderRadius: '3px'
};

export default Drawer;
