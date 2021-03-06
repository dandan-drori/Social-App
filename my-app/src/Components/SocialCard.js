import React, { Component } from 'react';
import CardHeader from './CardHeader';
import CardMain from './CardMain';
import CardInterActive from './CardInterActive';
import Comment from './Comment';

export class SocialCard extends Component {
  render() {
    return this.props.posts.map(post => (
      <div key={post.id} style={cardStyle}>
        <CardHeader user={this.props.user} time={this.props.time} />
        <CardMain post={post} />
        <CardInterActive
          post={post}
          handleincrement={this.props.handleincrement}
          handledecrement={this.props.handledecrement}
          onCommentButtonClick={this.props.onCommentButtonClick}
        />
        <Comment onComment={this.props.onComment} post={post} />
      </div>
    ));
  }
}

const cardStyle = {
  width: '100%',
  background: '#fff',
  paddingTop: '5px',
  borderRadius: '3px 3px 0 0',
  border: '1px solid rgba(0,0,0,0.2)',
  marginBottom: '10px'
};

export default SocialCard;
