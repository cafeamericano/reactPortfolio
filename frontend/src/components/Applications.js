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
  },
  {
    title: "Study Helper",
    deployedLink: "https://mystudyhelper.herokuapp.com/",
    githubLink: "https://github.com/cafeamericano/studyHelper",
    description:
      "Keep track of your study habits with this elegantly designed application. Demonstrates understanding of NodeJS, PostgreSQL, Express, Handlebars, AJAX, and more.",
    techsUsed:
      "NodeJS, PostgreSQL, Heroku, JavaScript, User Authentication, Express, HandlebarsJS, jQuery",
    imagePath: "appImages/studyhelper.png"
  },
  {
    title: "Dashboard",
    deployedLink: "https://cafeamericano.github.io/UNC-Project01/index.html",
    githubLink: "https://github.com/cafeamericano/UNC-Project01",
    description:
      "Quickly get information on stocks, weather, news, and more in this one-stop application. Demonstrates understanding of APIs, jQuery, AJAX, Firebase Authentication, and collaborative development.",
    techsUsed:
      "JavaScript, Firebase Realtime Database, User Authentication, API Consumption, ChartsJS, jQuery",
    imagePath: "appImages/dashboard.png"
  }
];

var appThumbnailStyle = {
  height: "200px",
};

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visibility,
      selfClickCounter: 0,
      applications: createdApplications
    };
    this.tallySelfClicks = this.tallySelfClicks.bind(this);
  }

  tallySelfClicks() {
    var x = this.state.selfClickCounter;
    this.setState({ selfClickCounter: x + 1 });
  }

  componentDidUpdate() {
    //Allows state to change when prop is updated by parent
    let x = this.props.visibility;
    if (x !== this.state.visible) {
      this.setState({ visible: x });
    }
  }

  drawCards = argObj => (
    <div className="col-xl-4 col-md-6">
      <div className="card shadow mb-3">
        <h5 className='p-3'>{argObj.title}</h5>
        <img src={argObj.imagePath} style={appThumbnailStyle} />
        <div className="card-footer text-right">
          <a href={argObj.githubLink}>
            <i class="fab fa-github"></i>
          </a>
          <span> | </span>
          <a href={argObj.deployedLink}>
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );

  render() {
    const appsToShow = this.state.applications;
    if (this.state.visible) {
      return (
        /////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        <section onClick={this.props.cumulativeClicker} class="card mb-4">
          <subsection onClick={this.tallySelfClicks}>
            <div className="card-header text-right">
              <span class="badge badge-primary">
                {this.state.selfClickCounter}
              </span>
            </div>
            <div className="card-body">
              <div className="row">{appsToShow.map(this.drawCards)}</div>
            </div>
          </subsection>
        </section>
        /////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
      );
    } else {
      return null;
    }
  }
}

export default Applications;
