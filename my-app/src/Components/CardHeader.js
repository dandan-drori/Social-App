import React, { Component } from 'react';

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
        <p style={{ marginLeft: '5px' }}>image</p>
        {/* <img src='../Images/michael-dam-mEZ3PoFGs_k-unsplash.jpg' alt='' /> */}
        <a href='#' style={{ marginLeft: '5px', color: 'blue' }}>
          {fName + ' ' + lName}
        </a>
        <p style={{ marginLeft: '5px' }}>
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

export default CardHeader;
