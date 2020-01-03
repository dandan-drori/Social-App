import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <h1>Social App</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h4 style={{ marginRight: '0.7vw' }}>
            Hello, {this.props.activeUser.fName}
          </h4>
          <button onClick={this.props.logout} className='logout'>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  background: '#00c6ff',
  height: '10vh',
  padding: '0.7vw',
  paddingLeft: '2vw',
  paddingRight: '2vw'
};

export default Header;
