import React, { Component } from 'react';
import Project from './Project';
import './Project.css';
import weather from '../Logo/weather.png';
import food from '../Logo/Food.png';
import food1 from '../Logo/Food1.png';
import login from '../Logo/login.png';
import T1 from '../Logo/T1.png';
import T2 from '../Logo/T2.png';

class ProjectScreen extends Component {

  state = {
    projects: [
      {
        title: '1.Weather APP',
        description: 'Our Tourism Weather API App provides travelers with real-time weather updates, ensuring optimal trip planning. With a user-friendly interface, the app offers accurate forecasts, enhancing the travel experience. Explore our portfolio to witness the projects commitment to seamless, weather-informed journeys.',
        languages: ['html', 'Css', 'Javascript', 'API'],
        screenshots: [weather], // Add other screenshots
        currentScreenshotIndex: 0,
      },
      {
        title: "2.Food Delivery",
        description: "Introducing our innovative food delivery project, seamlessly connecting users with their favorite cuisines. Our platform prioritizes user-friendly interfaces, real-time order tracking, and a diverse portfolio of partner restaurants. Elevate your dining experience with our reliable and efficient food delivery service."        ,
        languages: ['Html','Css','JavaScript','React'],
        screenshots: [food,food1],
        currentScreenshotIndex: 0,
      },
      {
        title: "3.Tourism",
        description: "Our Tourism Website project combines captivating design with essential travel information, offering users an immersive journey into destinations worldwide. With user-friendly navigation and rich visual content, the portfolio reflects our commitment to enhancing the travel experience and inspiring wanderlust.",
        languages: ['Html','Css','JavaScript'],
        screenshots: [login,T1,T2],
        currentScreenshotIndex: 0,
      },
    ],
  };

  componentDidMount() {
    // Change the image every 5 seconds
    this.intervalId = setInterval(this.changeScreenshot, 4000);
  }

  componentWillUnmount() {
    // Clear the interval to avoid memory leaks
    clearInterval(this.intervalId);
  }

  changeScreenshot = () => {
    this.setState((prevState) => ({
      projects: prevState.projects.map((project) => ({
        ...project,
        currentScreenshotIndex:
          (project.currentScreenshotIndex + 1) % project.screenshots.length,
      })),
    }));
  };

  render() {
    return (
      <div className="project-screen" id='Project'>
        <h2>My Projects</h2>

        <div className="project-list">
          {this.state.projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectScreen;
