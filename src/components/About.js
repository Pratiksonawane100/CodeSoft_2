import React, { Component } from "react";
import ProfilePic from "./prop.png";
import "./About.css";
import Medal from "./medal.png";
import Edu from "./edu.png";
import down from "../Logo/download.png";
import res from "../Logo/res.pdf";

class About extends Component {
  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }

  handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + res; // Replace with your actual CV file path
    link.download = "PratikSonawane_cv.pdf"; // Set the desired file name for download
    link.click();
  };

  render() {
    return (
      <>
        <div className="abo" id="About">
          <div>
          <p className="p">Get To Know More</p>
          <h1>About Me</h1>
          </div>
          <hr />
          <div className="ab">
            <div className="pic">
              <div className="profile-pic">
                <img src={ProfilePic} alt="Profile" />
              </div>
            </div>
            <div className="med">
              <div className="edu">
                <div className="card">
                  <img
                    src={Medal}
                    alt="Experience Logo"
                    className="card-logo"
                  />
                  <div className="card-content">
                    <h3>Experience</h3>
                    <p>1+ Years</p>
                    <p>FullStack developer</p>
                  </div>
                </div>

                {/* Education Card */}
                <div className="card">
                  <img src={Edu} alt="Education Logo" className="card-logo" />
                  <div className="card-content">
                    <h3>Education</h3>
                    <p>Mumbai University - Nerul | 2021-2025</p>
                    <p>B.E | Information Technology</p>
                  </div>
                </div>
              </div>
              <p className="p">
                Hi, I'm Pratik Sonawane, a Full Stack Web Developer based in
                Maharastra. With a strong background in web development, I am
                proficient in both frontend and backend technologies. I have a
                passion for creating responsive and user-friendly applications.
              </p>
              {/* Download CV button */}
              <button
                onClick={this.handleDownloadCV}
                className="download-button"
              >
                <img src={down} alt="Download Icon" className="download-icon" />
                Download CV
              </button>{" "}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
