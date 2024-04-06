import React, { useEffect } from "react";

export default function Fourth() {
  console.log("will run at 4");
  useEffect(() => {
    console.log("will run at 6");
  }, []);

  return <div></div>;
}
