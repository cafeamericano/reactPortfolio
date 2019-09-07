import React, { Component } from "react";

const headerStyle = {
  background: "#e8b6a2",
  color: "black",
  fontFamily: "monoton",
  fontSize: "50px",
  padding: "10px",
};

class Header extends Component {
  render() {
    return (
      <div id="logo" className="">
        <h1 class='text-center' style={headerStyle}>
          <i class="fab fa-react"></i> <span>Portfolio</span>
        </h1>
      </div>
    );
  }
}

export default Header;
