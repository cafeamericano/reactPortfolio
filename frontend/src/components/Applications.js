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

var appThumbnailStyle = {
  height: "200px"
};

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: createdApplications
    };
  }

  drawCards = argObj => (
    <div className="col-xl-4 col-md-6">
      <div className="card shadow mb-3">
        <div className="p-3">
          <h5>{argObj.title}</h5>
        </div>
        <img src={argObj.imagePath} style={appThumbnailStyle} />
        <div className="p-3">
          <p>{argObj.techsUsed}</p>
          <p>{argObj.deployedLink}</p>
          <p>{argObj.githubLink}</p>
        </div>
      </div>
    </div>
  );

  render() {
    const appsToShow = this.state.applications;
    return (
      /////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////
      <section class="card mb-4">
        <div className="card-header"></div>
        <div className="card-body">
          <div className="row">{appsToShow.map(this.drawCards)}</div>
        </div>
      </section>
      /////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////
    );
  }
}

export default Applications;
