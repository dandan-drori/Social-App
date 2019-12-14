import React, { Component } from 'react';
export class CardInterActive extends Component {
  incrementCount = () => {
    this.props.handleincrement(this.props.post.id);
  };

  decrementCount = () => {
    this.props.handledecrement(this.props.post.id);
  };

  animateButton = e => {
    e.target.classList.toggle('liked');
  };

  handleClick = e => {
    this.animateButton(e);
    if (e.target.className === 'postButton liked') {
      this.incrementCount(e);
    } else if (e.target.className === 'postButton') {
      this.decrementCount(e);
    }
  };

  handleComment = e => {
    e.target.classList.toggle('addComment');
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
        <button
          style={buttonStyle}
          className='postButton'
          onClick={this.handleComment}
        >
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
