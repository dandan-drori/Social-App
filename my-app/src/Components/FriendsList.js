import React, { Component } from 'react';

export class FriendsList extends Component {
  render() {
    return (
      <div style={friendsListStyle}>
        <p>list of friends here:</p>
      </div>
    );
  }
}

const friendsListStyle = {
  width: '20vw',
  background: '#E9EBEE'
};

export default FriendsList;
