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
            src={require('../Images/Rotem_Spivak.jpg')}
            alt=''
            style={{ width: '30px', height: '30px' }}
          />
          {friend.name}{' '}
          <i
            className='fas fa-circle fa-xs'
            style={{ color: '#42B72A', fontSize: '7px', marginRight: '15px' }}
          ></i>
          <span className='tooltip'>
            <img
              src={require(friend.img)}
              alt=''
              style={{ width: '30px', height: '30px' }}
            />
          </span>
        </li>
      );
    });
  }
}

export default Friend;
