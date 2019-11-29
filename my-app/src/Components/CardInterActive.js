import React, { Component } from 'react';

export class CardInterActive extends Component {
  handleClick = id => {
    this.props.handleincrement(1);
    // this.props.post[id - 1].id
  };

  render() {
    const {
      likesCount = 0,
      commentsCount = 0,
      sharesCount = 0
    } = this.props.post;

    return (
      <div
        style={{
          margin: '2vh'
        }}
      >
        <button onClick={this.handleClick} style={buttonStyle}>
          Like ({likesCount})
        </button>
        <button style={buttonStyle}>Comment ({commentsCount})</button>
        <button style={buttonStyle}>Share ({sharesCount})</button>
      </div>
    );
  }
}

const buttonStyle = {
  width: '30%',
  margin: '1vh'
};

export default CardInterActive;
