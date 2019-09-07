import React, { Component } from 'react';

const headerStyle = {
  background: '#e8b6a2',
  color: 'black',
  fontFamily: 'monoton',
  fontSize: '50px',
  padding: "10px"
}
class Header extends Component {

  render() {
    return (
      <div id="logo" className="" >
        <h1 style={headerStyle}>React Portfolio</h1>
      </div>
    );
  }
}

export default Header;