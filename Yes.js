import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Second from "./Second";
import Third from "./Third";

function Yes() {
  console.log("will run at 1");
  useEffect(() => {
    console.log("will run at 8");
  }, []);

  return (
    <div>
      Yes
      <Link to="/about">
        To about
        <Second />
        <Third />
      </Link>
    </div>
  );
}

export default Yes;
