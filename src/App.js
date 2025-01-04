import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Contacts from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <HelmetProvider>
      <Router
        basename={
          process.env.NODE_ENV === "production" ? "/danidrd.github.io" : "/"
        }
      >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
