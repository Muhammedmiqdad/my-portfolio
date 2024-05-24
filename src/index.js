import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Projects.css";
import "./styles/Contact.css";
import "./styles/Navbar.css";

const App = () => (
  <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
