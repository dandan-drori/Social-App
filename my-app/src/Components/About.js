import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div style={{ background: '#E9EBEE', width: '65vw' }}>
        <h2 style={{ textAlign: 'center', marginTop: '10px' }}>About</h2>
        <p style={{ marginTop: '10px' }}>
          This site was built with React for learning purposes only. enjoy
          browsing and playing around with my site :)
        </p>
      </div>
    );
  }
}

export default About;
