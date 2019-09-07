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
      lastName: 'Farmer'
    };
  }

  render() {
    return (
      /////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////
      <section
        id="aboutSection"
        class="card section scrollspy"
        style={sectionStyle}
      >
        <h3 class="thin-font" style={fontColor}>
          Meet Matthew Farmer.
        </h3>
        <h4 class="thin-font">{this.props.name}</h4>
        <h4 class="thin-font">{this.state.lastName}</h4>

        <p class="thin-font">
          I'm a full-stack web developer with a keen eye for design and a
          passion for developing applications to solve real-world problems. In
          addition to more than a year of experience with programming on both
          the front and back end, I possess more than five years of professional
          experience with creative problem solving (such as creating
          departmental knowledge repositories with search capability and writing
          code to determine refund amounts for thousands of accounts at a large
          bank).
        </p>
        <p id="extraAboutText" class="thin-font">
          My higher education includes a Bachelor’s Degree in Business
          Management as well as the (pending) completion of the UNC Chapel Hill
          Coding Bootcamp. Technical skills include HTML/CSS, JavaScript,
          NodeJS, ReactJS, and database manipulation. Certified by the American
          Society of Quality in process improvement, I am highly skilled with
          process flowcharting (an invaluable tool in application development).
          In a collaborative environment, I enjoy teaching others and sharing my
          knowledge for the benefit of the team.
        </p>
      </section>
      /////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////
    );
  }
}

export default AboutMe;
