import React from "react";
import ReactDOM from "react-dom/client";

const rootEL = document.getElementById("root");

// React element using React.createElement()
const container = React.createElement("div", { id: "container" }, [
  React.createElement("h1", { id: "heading-1" }, "Namaste"),
  React.createElement("h2", { id: "heading-2" }, "React"),
  React.createElement("h3", { id: "paragraph" }, "Course"),
]);
// Functional Component
const FunComp = ({ pass }) => (
  <div id="comp">Functional Components: {pass}</div>
);
// React element using JSX
const jsxContainer = (
  <div id="container">
    <h1 id="heading-1">Namaste</h1>
    <h2 id="heading-2">React</h2>
    <h3 id="paragraph">Course</h3>
    {/* calling functional components */}
    <FunComp pass={10} />
  </div>
);

const root = ReactDOM.createRoot(rootEL);
root.render(jsxContainer);
