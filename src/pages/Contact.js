import React from "react";
import { Helmet } from "react-helmet-async";
import "./Contact.css";
import "./global.css";

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Danidrd - Contact</title>
      </Helmet>
      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>
          If you have any questions or want to collaborate, feel free to reach
          out:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:danielecaliandro.dev@gmail.com">
              danielecaliandro.dev@gmail.com
            </a>
          </li>
          <li>
            <strong>Discord:</strong>{" "}
            <a
              href="https://discord.gg/TysjrUbe9r"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our Coding Hub
            </a>
          </li>
          <li>
            <strong>Telegram:</strong>{" "}
            <a
              href="https://t.me/dcaliandro"
              target="_blank"
              rel="noopener noreferrer"
            >
              @dcaliandro
            </a>
          </li>
        </ul>
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

export default Contact;
