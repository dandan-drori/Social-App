import React, { Component } from 'react';
import { Link } from 'C:/Users/dandan/Desktop/Web/React/social-app/Social-App/node_modules/react-router-dom';

export class CardHeader extends Component {
  render() {
    const { fName, lName } = this.props.user;
    const time = this.props.time;
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    return (
      <div style={{ display: 'flex' }}>
        <img
          src={require('../Images/adult-beard-boy-casual-220453.jpg')}
          alt=''
          style={imgStyle}
        />
        <a
          href='/myprofile'
          style={{ marginLeft: '5px', color: 'blue', marginTop: '2.5vh' }}
        >
          {fName + ' ' + lName}
        </a>
        <p
          style={{
            marginLeft: '5px',
            marginTop: '2.5vh',
            color: '#777',
            fontSize: '15px'
          }}
        >
          {months[time.getMonth()] +
            ' ' +
            time.getDate() +
            ',' +
            ' ' +
            time.getHours() +
            ':' +
            time.getMinutes() +
            ':' +
            time.getSeconds()}
        </p>
      </div>
    );
  }
}

const imgStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  marginLeft: '0.5vw'
};

export default CardHeader;
