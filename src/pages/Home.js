import React from "react";
import { Helmet } from "react-helmet-async";
import "./Home.css";
import "./global.css";

function Home() {
  const handleClick = () => {
    // Tracking with Google Analytics
    window.SVGAnimatedAngle("event", "click", {
      event_category: "Link",
      event_label: "Discord Invite",
    });
  };
  return (
    <div className="pageContainer">
      <Helmet>
        <title>Danidrd - Home</title>
      </Helmet>
      {/* Hero Section */}
      <div className="content">
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
            prepare for coding interviews. You can find the invitation link in
            the <a href="/contacts">Contacts</a> section.
          </p>
          <p>
            Stay tuned for more updates and additional activities that I'll
            share here over time. Whether you're a developer or just curious
            about technology, there's something for everyone!
          </p>
        </section>

        <div className="events-grid" style={{ marginBottom: "10rem" }}>
          <div className="event">
            <a
              href="https://discord.gg/TysjrUbe9r"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              <img src="rss.png" alt="RSS Feed Bot Creation" />
            </a>
            <h3>RSS Feed Bot Creation</h3>
            <p>
              We are developing an RSS Feed bot to gather articles and news
              about programming languages and other.
            </p>
          </div>
          <div className="event">
            <a href="https://github.com/matteogiorgi/qint">
              <img src="interviews.png" alt="Coding Interviews Preparation" />
            </a>
            <h3>Coding Interviews Preparation</h3>
            <p>
              Join us to improve your skill and get ready to ace Coding
              Interviews
            </p>
          </div>
          <div className="push"></div>
        </div>
      </div>
      {/* Footer Section */}

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
  );
}

export default Home;
