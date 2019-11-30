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
          handleincrement={this.props.handleincrement}
        />
      </div>
    );
  }
}

const ContainerStyle = {
  height: '90vh',
  width: '60vw',
  background: '#E9EBEE'
};

export default MainContainer;
