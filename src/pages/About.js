import React from "react";
import { Helmet } from "react-helmet";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <Helmet>
        <title>Danidrd - About</title>
      </Helmet>
      <h1>About Us</h1>
      <p>Learn more about our journey and what we do.</p>
    </div>
  );
}

export default About;
