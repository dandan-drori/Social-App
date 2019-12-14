import React, { Component } from 'react';
export class Friend extends Component {
  friends = () => {};

  render() {
    return this.props.friends.map(friend => {
      return (
        <li
          key={friend.id}
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
          <img
            src={friend.img}
            alt=''
            style={{ width: '30px', height: '30px', borderRadius: '50%' }}
          />
          {friend.name}{' '}
          <i
            className='fas fa-circle fa-xs'
            style={{ color: '#42B72A', fontSize: '7px', marginRight: '15px' }}
          ></i>
          <span className='tooltip'>
            <img
              src={friend.img}
              alt=''
              style={{ width: '30px', height: '30px', textAlign: 'left' }}
            />
            <a
              href='/'
              className='tooltipLink'
              style={{
                marginTop: '7px',
                marginLeft: '5px',
                fontSize: '13px',
                border: 'none',
                color: '#fff'
              }}
            >
              {friend.name}
            </a>
          </span>
        </li>
      );
    });
  }
}

export default Friend;
