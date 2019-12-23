import React, { Component } from 'react';
import SocialCard from './SocialCard';
import InputField from './InputField';
export class MainContainer extends Component {
  render() {
    return (
      <div style={ContainerStyle}>
        <InputField onPost={this.props.onPost} />
        <SocialCard
          user={this.props.user}
          time={this.props.time}
          title={this.props.title}
          posts={this.props.posts}
          onComment={this.props.onComment}
          handleincrement={this.props.handleincrement}
          handledecrement={this.props.handledecrement}
          onCommentButtonClick={this.props.onCommentButtonClick}
        />
      </div>
    );
  }
}

const ContainerStyle = {
  width: '65vw',
  background: '#E9EBEE',
  paddingRight: '2vw'
};

export default MainContainer;
