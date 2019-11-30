import React, { Component } from 'react';
import Drawer from './Drawer';
import FriendsList from './FriendsList';

export class MyProfile extends Component {
  render() {
    return (
      <div>
        <Drawer />
        <ProfileMain />
        <FriendsList />
      </div>
    );
  }
}

export default MyProfile;
