import React from "react";
import { Link } from "react-router-dom";

function Yes() {
  return (
    <div>
      Yes
      <Link to="/about">To about</Link>
    </div>
  );
}

export default Yes;
