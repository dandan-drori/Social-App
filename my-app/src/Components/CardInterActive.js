import React, { Component } from 'react';

export class CardInterActive extends Component {
  handleClick = () => {
    this.props.handleincrement(this.props.post.id);
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
  width: '29.5%',
  margin: '1vh',
  marginLeft: '15px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  padding: '5px',
  background: 'none'
};

export default CardInterActive;
