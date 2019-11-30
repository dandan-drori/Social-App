import React, { Component } from 'react';

export class ProfileMain extends Component {
  render() {
    return (
      <div>
        <img
          src={require('../Images/adult-beard-boy-casual-220453.jpg')}
          alt=''
          style={imgStyle}
        />
      </div>
    );
  }
}

const imgStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  textAlign: 'center'
};

export default ProfileMain;
