import React, { useEffect } from "react";

export default function Second() {
  console.log("will run at 2");
  useEffect(() => {
    console.log("will run at 5");
  }, []);

  return <div></div>;
}
