import React from "react";
import { Helmet } from "react-helmet-async";
import "./About.css";
import "./global.css";

function About() {
  return (
    <div className="pageContainer">
      <Helmet>
        <title>Danidrd - About</title>
      </Helmet>
      {/* About Section */}
      <section className="about" style={{ marginBottom: "10rem" }}>
        <h2>About me</h2>
        <p>
          My name is Daniele Caliandro, and I graduated in Computer Science from
          the University of Pisa. Currently, I am pursuing a Master's degree in
          Computer Science and Networking.
        </p>
        <p>
          My interests span across various areas, including system programming,
          High-Performance Computing (HPC), and higher-level concepts like
          DevOps—a field I am still exploring from the basics but am eager to
          master.
        </p>
        <p>
          I have a passion for programming languages, with a particular fondness
          for functional and procedural paradigms. That said, I also enjoy
          working with class-based and object-based languages.
        </p>
        <p>
          My journey is driven by curiosity and a constant desire to deepen my
          knowledge and skills in both fundamental and cutting-edge topics in
          computer science.
        </p>
      </section>

      {/* Footer */}

      <footer className="footer">
        <p>© 2025 Danidrd. All Rights Reserved.</p>
        <p>
          Contact:{" "}
          <a href="mailto:danielecaliandro.dev@gmail.com">
            danielecaliandro.dev@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default About;
