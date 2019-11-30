import React, { Component } from 'react';
import Drawer from './Drawer';
import FriendsList from './FriendsList';
import ProfileMain from './ProfileMain';

export class MyProfile extends Component {
  render() {
    return (
      <div>
        <ProfileMain />
      </div>
    );
  }
}

export default MyProfile;
