import React, { Component } from 'react';
import Friends from './Friends';
export class FriendsList extends Component {
  render() {
    return (
      <div style={friendsListStyle}>
        <Friends />
      </div>
    );
  }
}

const friendsListStyle = {
  width: '15vw',
  background: '#E9EBEE',
  paddingLeft: '',
  paddingTop: '2vh',
  borderLeft: '1px solid black'
};

export default FriendsList;
