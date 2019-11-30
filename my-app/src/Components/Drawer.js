import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'C:/Users/dandan/Desktop/Web/React/social-app/Social-App/node_modules/react-router-dom';

export class Drawer extends Component {
  render() {
    return (
      <div style={drawerStyle}>
        <Link to='/myprofile'>My Profile</Link>
        <Link to='/'>News Feed</Link>
        <Link to='/about'>About</Link>
      </div>
    );
  }
}

const drawerStyle = {
  width: '20vw',
  minHeight: '90vh',
  paddingLeft: '3vw',
  paddingTop: '3vh',
  background: '#E9EBEE'
};

export default Drawer;
