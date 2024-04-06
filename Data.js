import React from "react";
import { useParams } from "react-router-dom";

export default function Data() {
  console.log(useParams());
  return <div>Data</div>;
}
