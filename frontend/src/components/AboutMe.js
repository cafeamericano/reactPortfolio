import React, { Component } from "react";

const fontColor = {
  color: "#f0ca62"
};

const sectionStyle = {
  padding: "25px",
  marginBottom: "40px",
  backgroundColor: "rgba(255, 255, 255, 0.8)"
};

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Meet Matthew Farmer.",
      paragraphOne:
        "I'm a full-stack web developer with a keen eye for design and a passion for developing applications to solve real-world problems. In addition to more than a year of experience with programming on both the front and back end, I possess more than five years of professional experience with creative problem solving (such as creating departmental knowledge repositories with search capability and writing code to determine refund amounts for thousands of accounts at a large bank).",
      paragraphTwo:
        "My higher education includes a Bachelor’s Degree in Business Management as well as the (pending) completion of the UNC Chapel Hill Coding Bootcamp. Technical skills include HTML/CSS, JavaScript, NodeJS, ReactJS, and database manipulation. Certified by the American Society of Quality in process improvement, I am highly skilled with process flowcharting (an invaluable tool in application development). In a collaborative environment, I enjoy teaching others and sharing my knowledge for the benefit of the team."
    };
  }

  render() {
    return (
      /////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////
      <section onClick={this.props.cumulativeClicker} class="card mb-4">
        <div className="card-header text-right">
          <span class="badge badge-primary">{this.props.badgeCount}</span>
        </div>
        <div className="card-body">
          <h3 class="thin-font" style={fontColor}>
            {this.state.headerText}
          </h3>
          <p class="thin-font">{this.state.paragraphOne}</p>
          <p id="extraAboutText" class="thin-font">
            {this.state.paragraphTwo}
          </p>
        </div>
      </section>
      /////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////
    );
  }
}

export default AboutMe;
