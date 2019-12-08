import React, { Component } from 'react';

export class InputField extends Component {
  state = {
    currentId: 1,
    title: ''
  };

  onChange = e => {
    this.setState({ title: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onPost(this.state.currentId, this.state.title);
    this.setState({ title: '' });
    this.setState({ currentId: this.state.currentId + 1 });
  };

  render() {
    return (
      <div style={inputFieldStyle}>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='title'
            title='post'
            placeholder='Enter post content here:'
            value={this.state.title}
            onChange={this.onChange}
            style={inputStyle}
          />
          <input
            type='submit'
            value='Submit'
            onClick={this.onSubmit}
            style={submitStyle}
          />
        </form>
      </div>
    );
  }
}

const inputFieldStyle = {
  height: '10vh',
  margin: '3vh'
};

const inputStyle = {
  height: '10vh',
  width: '75%',
  fontSize: '15px'
};

const submitStyle = {
  height: '10vh',
  width: '10%',
  minWidth: '50px',
  position: 'relative',
  top: '-1px'
};

export default InputField;
