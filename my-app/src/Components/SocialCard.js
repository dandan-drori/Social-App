import React, { Component } from 'react';
import CardHeader from './CardHeader';
import CardMain from './CardMain';
import CardInterActive from './CardInterActive';

export class SocialCard extends Component {
  render() {
    return this.props.posts.map(post => (
      <div
        key={post.id}
        handleincrement={this.props.handleincrement}
        style={cardStyle}
      >
        <CardHeader user={this.props.user} time={this.props.time} />
        <CardMain post={post} />
        <CardInterActive
          post={post}
          handleincrement={this.props.handleincrement}
        />
      </div>
    ));
  }
}

const cardStyle = {
  width: '100%',
  background: '#fff',
  paddingTop: '5px',
  borderRadius: '3px',
  border: '1px solid rgba(0,0,0,0.2)',
  marginBottom: '10px'
};

export default SocialCard;
