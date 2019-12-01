import React, { Component } from 'react';
import Drawer from './Drawer';
import FriendsList from './FriendsList';
import ProfileMain from './ProfileMain';

export class MyProfile extends Component {
  render() {
    return (
      <div style={profileStyle}>
        <ProfileMain user={this.props.user} posts={this.props.posts} />
      </div>
    );
  }
}

const profileStyle = {
  width: '60vw'
};

export default MyProfile;
