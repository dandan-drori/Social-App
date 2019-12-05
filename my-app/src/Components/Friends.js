import React, { Component } from 'react';
import Friend from './Friend';
import Rotem_Spivak from '../Images/Rotem_Spivak.jpg';
import Benji_Drori from '../Images/Benji_Drori.jpg';
import Eden_Eliel from '../Images/Eden_Eliel.jpg';
import Yotam_tzamir from '../Images/Yotam_Tzamir.jpg';
import Idan_Arad from '../Images/Idan_Arad.jpg';
import Shir_Ben_Moshe from '../Images/Shir_Ben_Moshe.jpg';
import Saar_Danon from '../Images/Saar_Danon.jpg';

export class Friends extends Component {
  state = {
    title: '',
    friends: [
      {
        id: 1,
        name: 'Rotem Spivak',
        img: Rotem_Spivak
      },
      {
        id: 2,
        name: 'Benji Drori',
        img: Benji_Drori
      },
      {
        id: 3,
        name: 'Eden Eliel',
        img: Eden_Eliel
      },
      {
        id: 4,
        name: 'Yotam tzamir',
        img: Yotam_tzamir
      },
      {
        id: 5,
        name: 'Shir Ben Moshe',
        img: Shir_Ben_Moshe
      },
      {
        id: 6,
        name: 'Idan Arad',
        img: Idan_Arad
      },
      {
        id: 7,
        name: 'Saar Danon',
        img: Saar_Danon
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
