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
    const prevState = this.state.commentId;
    e.preventDefault();
    this.props.onComment(
      this.props.post.id,
      this.state.commentId,
      this.state.title
    );
    this.setState({ title: '' });
    this.setState({ commentId: prevState + 1 });
  };

  render() {
    return (
      <div style={containerStyle}>
        {this.props.post.isCommentHidden ? null : (
          <div>
            <form onSubmit={this.onSubmit}>
              <input
                type='text'
                placeholder='Write a comment...'
                title='comment'
                value={this.state.title}
                onChange={this.onChange}
                className='commentInput'
                style={{
                  width: '100%',
                  height: '5vh',
                  borderRadius: '15px',
                  backgroundColor: '#F2F3F5',
                  border: '1px solid rgba(0,0,0,.2)',
                  paddingLeft: '1vw'
                }}
              />
            </form>
            <div id='comment'>
              {this.props.post.comments.map(comment => {
                return (
                  <div key={comment.commentId} style={commentStyle}>
                    <img
                      src={require('../Images/adult-beard-boy-casual-220453.jpg')}
                      alt=''
                      style={imgStyle}
                    />
                    <div style={contentStyle}>{comment.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const contentStyle = {
  borderRadius: '15px',
  background: '#E2E3E5',
  padding: '5px 10px',
  marginLeft: '1vw'
};

const imgStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginLeft: '0.5vw'
};

const containerStyle = {
  display: 'block',
  position: 'relative',
  width: '62.99vw',
  marginBottom: '20px',
  backgroundColor: '#fff',
  padding: '0.3rem',
  paddingTop: '1rem',
  borderRadius: '0 0 3px 3px',
  border: '1px solid rgba(0,0,0,.2)',
  borderBottom: 'none',
  right: '1px'
};

const commentStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '5px'
};

export default Comment;
