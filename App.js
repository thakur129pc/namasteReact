import React from "react";
import ReactDOM from "react-dom/client";

const rootEL = document.getElementById("root");
const container = React.createElement("div", { id: "container" }, [
  React.createElement("h1", { id: "heading-1" }, "Namaste"),
  React.createElement("h2", { id: "heading-2" }, "React"),
  React.createElement("h3", { id: "paragraph" }, "Course"),
]);
const root = ReactDOM.createRoot(rootEL);
root.render(container);
