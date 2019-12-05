import React, { Component } from 'react';
export class Friend extends Component {
  friends = () => {};

  render() {
    console.log(this.props.friends[0].img);
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
            <p
              style={{ marginTop: '7px', marginLeft: '5px', fontSize: '13px' }}
            >
              {friend.name}
            </p>
          </span>
        </li>
      );
    });
  }
}

export default Friend;
