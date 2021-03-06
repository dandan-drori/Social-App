import React, { Component } from 'react';
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
  width: '65vw'
};

export default MyProfile;
