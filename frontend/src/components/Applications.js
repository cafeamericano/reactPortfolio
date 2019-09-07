import React, { Component } from "react";

const createdApplications = [
  {
    title: "Patient Plus",
    deployedLink: "https://patientplus.herokuapp.com/",
    githubLink: "https://github.com/cafeamericano/UNC-Project02",
    description:
      "Manage patients, identify health trends, and schedule appointments with this electronic patient management system. Demonstrates understanding of NodeJS, MySQL, Heroku, Sequelize, Handlebars, Express, Bootstrap, jQuery, Moment, Nodemailer, animate.css, Firebase Authentication, UUID, Materialize, ChartsJS, and Google Charts API.",
    techsUsed:
      "NodeJS, MySQL, JavaScript, Sequelize, Nodemailer, User Authentication, Express, HandlebarsJS, jQuery",
    imagePath: "appImages/patientPlus.png"
  },
  {
    title: "Career Coach",
    deployedLink: "https://careercoach.herokuapp.com/",
    githubLink: "https://github.com/cafeamericano/careerCoach",
    description:
      "Apply for jobs, track applications, and gain insights with this powerful, career-oriented application. Demonstrates understanding of NodeJS, MongoDB, Express, Handlebars, AJAX, and more.",
    techsUsed:
      "NodeJS, MongoDB, Heroku, JavaScript, User Authentication, Express, HandlebarsJS, jQuery",
    imagePath: "appImages/careerCoach.png"
  }
];

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: createdApplications
    };
  }

  drawCards = argObj => (
    <div className="col-6 mb-5">
      <div className="card">
        <h5>{argObj.title}</h5>
        <img src={argObj.imagePath} />
        <p>{argObj.techsUsed}</p>
        <p>{argObj.deployedLink}</p>
        <p>{argObj.githubLink}</p>
      </div>
    </div>
  );

  render() {
    const appsToShow = this.state.applications;
    return (
      /////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////
      <div className="container">
        <div className="row">{appsToShow.map(this.drawCards)}</div>
      </div>
      /////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////
    );
  }
}

export default Applications;
