import React from "react";
import { Helmet } from "react-helmet-async";
import "./Home.css";

function Home() {
  return (
    <div className="pageContainer">
      <Helmet>
        <title>Danidrd - Home</title>
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Danidrd's Website</h1>
        <p>
          This is the personal website of{" "}
          <a
            href="https://github.com/danidrd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Danidrd
          </a>
          , where I share my interests, projects, and resources.
        </p>
        <p>
          On my Discord server, <strong>Coding Hub</strong>, we collaborate on
          exciting projects such as building bots and solving exercises to
          prepare for coding interviews. You can find the invitation link in the{" "}
          <a href="/contacts">Contacts</a> section.
        </p>
        <p>
          Stay tuned for more updates and additional activities that I'll share
          here over time. Whether you're a developer or just curious about
          technology, there's something for everyone!
        </p>
      </section>

      {/* Footer Section */}
      <div class="footer-container">
        <footer className="footer">
          <p>&copy; 2025 Danidrd. All Rights Reserved.</p>
          <p>
            Contact:{" "}
            <a href="mailto:danielecaliandro.dev@gmail.com">
              danielecaliandro.dev@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
