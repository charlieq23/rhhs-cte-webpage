import React, { Component } from "react";
import './../../css/App.css';
import Splash from './splash';

class Home extends Component {
  render() {
    return (
      <div>
        <Splash/>
        <h2><i><b> Career and Technical Education programs are made up of elective courses that teach students about different careers. Richmond Hill High School offers several different CTE pathways including: </b></i></h2>
        <ul className = "list">
            <li>Hospitalisty and Tourism</li>
            <li>Software Engineering</li>
            <li>Health Sciences</li>
            <li>IT and Robotics</li>
            <li>Art and Design</li>
            <li>Criminology and Forensics</li>
        </ul>
        <h3><i><b>Explore each of our pathways above to learn about what we do at Richmond Hill!</b></i></h3>
      </div>
    );
  }
}

export default Home;  