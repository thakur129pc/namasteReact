import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Second from "./Second";
import Third from "./Third";
import myContext from "./myContext";

function Yes(data) {
  const { appData, setData } = useContext(myContext);
  console.log(appData, "----------");
  console.log("will run at 1");
  useEffect(() => {
    console.log("will run at 8");
  }, []);

  return (
    <div>
      Yes - {appData}
      <br></br>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      ></input>
      <br></br>
      <Link to="/about">
        To about
        <Second />
        <Third />
      </Link>
    </div>
  );
}

export default Yes;
