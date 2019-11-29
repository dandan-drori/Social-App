import React, { Component } from 'react';

export class CardMain extends Component {
  render() {
    return (
      <div style={cardMainStyle}>
        <p>{this.props.post.title}</p>
      </div>
    );
  }
}

const cardMainStyle = {
  marginLeft: '20px',
  marginTop: '10px'
};

export default CardMain;
