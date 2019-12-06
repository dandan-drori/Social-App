import React, { Component } from 'react';

export class CardInterActive extends Component {
  incrementCount = () => {
    this.props.handleincrement(this.props.post.id);
  };

  // animation: scaleButton 200ms ease-in-out;

  animateButton = e => {
    if (e.target.style.animation === '') {
      e.target.style.animation = 'scaleButton 150ms ease-in-out';
    } else {
      e.target.style.animation = '';
    }
  };

  handleClick = e => {
    this.incrementCount();
    this.animateButton(e);
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
        <button
          onClick={this.handleClick}
          style={buttonStyle}
          className='postButton'
        >
          <i className='far fa-thumbs-up'></i> Like ({likesCount})
        </button>
        <button style={buttonStyle} className='postButton'>
          {' '}
          <i className='far fa-comment'></i> Comment ({commentsCount})
        </button>
        <button style={buttonStyle} className='postButton'>
          {' '}
          <i className='far fa-share-square'></i> Share ({sharesCount})
        </button>
      </div>
    );
  }
}

let buttonStyle = {
  width: '33%',
  margin: '0.1vw',
  marginLeft: '1px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  padding: '10px 5px'
};

export default CardInterActive;
