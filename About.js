import React from "react";
import { Link } from "react-router-dom";
import ClassComp from "./CLassComp";

class About extends React.Component {
  constructor() {
    super();
    console.log("will run at 1st");
  }
  componentDidMount() {
    console.log("will run at 6th");
  }
  render() {
    console.log("will run at 2nd");
    return (
      <div>
        About
        <Link to="/yes">To yes</Link>
        <ClassComp name="Hello" />
      </div>
    );
  }
}

export default About;
