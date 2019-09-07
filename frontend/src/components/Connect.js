import React, { Component } from "react";

const sectionStyle = {
  padding: "25px",
  marginBottom: "40px",
  backgroundColor: "rgba(255, 255, 255, 0.8)"
};

class Connect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      /////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////
      // <!-- Connect -->
      <section
        id="connectSection"
        class="card section scrollspy"
        style={sectionStyle}
      >
        <h3 class="thin-font">Connect.</h3>
        <div class="row">
          {/* <!--Start Card--> */}
          <div data-seed="Connect: Resume Link" class="col s12 m4">
            <div class="card inflatable deflated">
              <a
                href="https://drive.google.com/uc?export=download&id=1HOcFhOlveROqNYVoJIyTxzg6UWnjzxaY"
                download
              >
                <div class="card-content activator">
                  <span class="card-title">Résumé</span>
                  <i class="fas fa-file-invoice fa-5x"></i>
                </div>
              </a>
            </div>
          </div>
          {/* <!--End Card--> */}

          {/* <!--Start Card--> */}
          <div data-seed="Connect: GitHub Link" class="col s12 m4">
            <a href="https://github.com/cafeamericano">
              <div class="card inflatable deflated">
                <div class="card-content row">
                  <span class="card-title">GitHub</span>
                  <i class="fab fa-github fa-5x"></i>
                </div>
              </div>
            </a>
          </div>
          {/* <!--End Card--> */}

          {/* <!--Start Card--> */}
          <div data-seed="Connect: LinkedIn Link" class="col s12 m4">
            <a href="https://www.linkedin.com/in/matthew-farmer-204930182">
              <div class="card inflatable deflated">
                <div class="card-content row">
                  <span class="card-title">LinkedIn</span>
                  <i class="fab fa-linkedin fa-5x"></i>
                </div>
              </div>
            </a>
          </div>
          {/* <!--End Card--> */}

          {/* <!--Start Card--> */}
          <div data-seed="Connect: Email Link" class="col s12 m4">
            <div class="card inflatable deflated">
              <div class="card-content activator">
                <span class="card-title">Email</span>
                <i class="fas fa-envelope fa-5x"></i>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  <i class="material-icons right">close</i>
                </span>
                <p>Reach me at:</p>
                <p>
                  <strong>mfarmer5102@gmail.com</strong>
                </p>
              </div>
            </div>
          </div>
          {/* <!--End Card--> */}

          {/* <!--Start Card--> */}
          <div data-seed="Connect: Phone Link" class="col s12 m4">
            <div class="card inflatable deflated">
              <div class="card-content activator">
                <span class="card-title">Phone</span>
                <i class="fas fa-phone fa-5x"></i>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  <i class="material-icons right">close</i>
                </span>
                <p>Reach me at:</p>
                <p>
                  <strong>252-289-2937</strong>
                </p>
              </div>
            </div>
          </div>
          {/* <!--End Card--> */}
        </div>
      </section>
      /////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////
    );
  }
}

export default Connect;
