import React, { Component } from 'react';
export class Comment extends Component {
  state = {
    title: '',
    commentId: 1
  };

  onChange = e => {
    this.setState({ title: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onComment(
      this.props.post.id,
      this.state.commentId,
      this.state.title
    );
    this.setState({ title: '' });
    this.setState({ commentId: this.state.commentId + 1 });
  };

  render() {
    return (
      <div style={CommentStyle}>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Write a comment...'
            title='comment'
            value={this.state.title}
            onChange={this.onChange}
            className='commentInput'
            id='commentInput'
            style={{ width: '90%', height: '5vh', borderRadius: '15px' }}
          />
        </form>
        <div id='comment'>{this.props.post.comments[0].title}</div>
      </div>
    );
  }
}

const CommentStyle = {
  display: 'block',
  position: 'absolute',
  width: '62.9vw',
  marginBottom: '20px',
  backgroundColor: '#00C6FF',
  textAlign: 'center',
  padding: '0.3rem'
};

export default Comment;
