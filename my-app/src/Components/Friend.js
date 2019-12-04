import React, { Component } from 'react';

export class Friend extends Component {
  friends = () => {};

  render() {
    return this.props.friends.map(friend => {
      return (
        <li
          className='friend'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            padding: '5px',
            userSelect: 'none',
            fontSize: '13px'
          }}
        >
          {friend.name}{' '}
          <i
            class='fas fa-circle fa-xs'
            style={{ color: '#42B72A', fontSize: '7px', marginRight: '15px' }}
          ></i>
          <span className='tooltip'>
            <img
              src={friend.img}
              alt=''
              style={{ width: '50px', height: '30px' }}
            />
          </span>
        </li>
      );
    });
  }
}

export default Friend;
