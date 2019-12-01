import React, { Component } from 'react';

export class ProfileMain extends Component {
  render() {
    const { fName, lName } = this.props.user;
    const { likesCount, commentsCount, SharesCount } = this.props.posts;

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <img
          src={require('../Images/adult-beard-boy-casual-220453.jpg')}
          alt=''
          style={imgStyle}
        />
        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>
          {fName + ' ' + lName}
        </p>
        <main style={{ display: 'initial', textAlign: 'left' }}>
          <p>Likes: {likesCount}</p>
          <p>Comments: {commentsCount}</p>
          <p>Shares: {SharesCount}</p>
        </main>
      </div>
    );
  }
}

const imgStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  marginTop: '10px'
};

export default ProfileMain;
