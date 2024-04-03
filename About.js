import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      About
      <Link to="/yes">To yes</Link>
    </div>
  );
}

export default About;
