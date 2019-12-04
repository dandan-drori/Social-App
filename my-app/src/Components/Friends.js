import React, { Component } from 'react';
import Friend from './Friend';

export class Friends extends Component {
  state = {
    title: '',
    friends: [
      {
        id: 1,
        name: 'Rotem Spivak',
        img: '../Images/Rotem_Spivak.jpg'
      },
      {
        id: 2,
        name: 'Benji Drori',
        img: '../Images/Benji_Drori.jpg'
      },
      {
        id: 3,
        name: 'Eden Eliel',
        img: '../Images/Eden_Eliel.jpg'
      },
      {
        id: 4,
        name: 'Yotam tzamir',
        img: '../Images/YotamTzamir.jpg'
      },
      {
        id: 5,
        name: 'Shir Ben Moshe',
        img: '../Images/Shir_Ben_Moshe.jpg'
      },
      {
        id: 6,
        name: 'Idan Arad',
        img: '../Images/Idan_Arad.jpg'
      },
      {
        id: 7,
        name: 'Saar Danon',
        img: '../Images/Saar_Danon.jpg'
      }
    ]
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({
      friends: [
        this.state.friends.filter(friend => {
          return friend.id === 1;
        })
      ]
    });
  };

  render() {
    return (
      <div>
        <h4
          style={{
            padding: '5px 5px',
            textAlign: 'center',
            textDecoration: 'underline'
          }}
        >
          Friends
        </h4>
        <input
          type='text'
          placeholder='filter friends'
          name='title'
          title='filter'
          value={this.state.title}
          onChange={this.onChange}
          style={{ marginLeft: '20px', width: '80%' }}
        />
        <ul style={{ listStyle: 'none' }}>
          <Friend friends={this.state.friends} />
        </ul>
      </div>
    );
  }
}

export default Friends;
