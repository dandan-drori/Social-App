import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <h1>Social App</h1>
      </div>
    );
  }
}

const headerStyle = {
  background: '#6fc5ff',
  textAlign: 'center',
  height: '10vh'
};

export default Header;
