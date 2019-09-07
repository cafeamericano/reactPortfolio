//IMPORTS=========================================================================================================================================================

import React, { Component } from "react";

//Child components
import AboutMe from "./AboutMe";
import Applications from "./Applications";
import Connect from "./Connect";

//STYLING=========================================================================================================================================================

//NAME, STATE, AND BINDING=========================================================================================================================================================

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalClicks: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //LIFECYCLE METHODS=========================================================================================================================================================

  //SELF METHODS=========================================================================================================================================================

  //When handleClick is called, do the following
  handleClick() {
    const total = this.state.totalClicks;
    this.setState({ totalClicks: total + 1 });
  }

  //RENDER=========================================================================================================================================================

  render() {
    return (
      <div className="p-3">
        <AboutMe badgeCount='3' clickingAction={this.handleClick}></AboutMe>
        <Applications badgeCount='7' clickingAction={this.handleClick}></Applications>
        <Connect badgeCount='2' clickingAction={this.handleClick}></Connect>
      </div>
    );
  }
}

//Export class AllEntriesList to be used by App.js
export default Main;
