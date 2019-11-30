import React, { Component } from 'react';

export class Drawer extends Component {
  render() {
    return (
      <div style={drawerStyle}>
        <p>simple side nav bar</p>
        <a href='#'>My Profile</a>
        <a href='#'>News Feed</a>
        <a href='#'>About</a>
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
