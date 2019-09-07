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
      totalClicks: 0
    };
    this.tallyCumulativeClicks = this.tallyCumulativeClicks.bind(this);
  }

  //LIFECYCLE METHODS=========================================================================================================================================================

  //SELF METHODS=========================================================================================================================================================

  //When tallyCumulativeClicks is called, do the following
  tallyCumulativeClicks() {
    const total = this.state.totalClicks;
    this.setState({ totalClicks: total + 1 });
  }

  //RENDER=========================================================================================================================================================

  render() {
    return (
      <div className="p-3">
        <div class="alert alert-secondary" role="alert">
          Total Clicks Across All Components: {this.state.totalClicks}
        </div>
        <AboutMe
          cumulativeClicker={this.tallyCumulativeClicks}
        ></AboutMe>
        <Applications
          cumulativeClicker={this.tallyCumulativeClicks}
        ></Applications>
        <Connect cumulativeClicker={this.tallyCumulativeClicks}></Connect>
      </div>
    );
  }
}

//Export class AllEntriesList to be used by App.js
export default Main;
