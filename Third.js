import React, { useEffect } from "react";
import Fourth from "./Fourth";

export default function Third() {
  console.log("will run at 3");
  useEffect(() => {
    console.log("will run at 7");
  }, []);

  return (
    <div>
      <Fourth />
    </div>
  );
}
