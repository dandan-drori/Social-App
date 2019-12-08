import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Comment extends Component {
  state = {
    comments: [],
    title: '',
    commentNumber: 1
  };

  onChange = e => {
    this.setState({ title: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.onComment(this.state.commentNumber, this.state.title);
    this.setState({ title: '' });
    this.setState({ commentNumber: this.state.commentNumber + 1 });
    let comment = React.createElement('p', this.state.title);
    ReactDOM.render(comment, document.getElementById('comment'));
  };

  onComment = (commentNumber, title) => {
    const newComment = {
      commentNumber,
      title
    };
    this.setState({
      comments: [...this.state.comments, newComment]
    });
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
            style={{ width: '90%', height: '5vh', borderRadius: '15px' }}
          />
        </form>
        <div id='comment'></div>
      </div>
    );
  }
}

const CommentStyle = {
  display: 'block',
  position: 'absolute',
  width: '62.9vw',
  marginBottom: '20px',
  backgroundColor: 'red',
  textAlign: 'center',
  padding: '0.3rem'
};

export default Comment;
