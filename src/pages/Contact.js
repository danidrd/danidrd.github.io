import React from "react";
import { Helmet } from "react-helmet";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Danidrd - Contact</title>
      </Helmet>
      <h1>Contact Us</h1>
      <p>Feel free to reach out via the contact form below.</p>
    </div>
  );
}

export default Contact;
