import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import noData, { data } from "./imp";
import About from "./About";
import Yes from "./Yes";
import { Error } from "./Error";
import {
  // BrowserRouter,
  // Routes,
  // Route,
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";

const rootEL = document.getElementById("root");

// React element using React.createElement()
// const container = React.createElement("div", { id: "container" }, [
//   React.createElement("h1", { id: "heading-1" }, "Namaste"),
//   React.createElement("h2", { id: "heading-2" }, "React"),
//   React.createElement("h3", { id: "paragraph" }, "Course"),
// ]);
// Functional Component
const FunComp = ({ pass }) => {
  return (
    <div>
      {pass}
      <Link to="/about">To about</Link>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <FunComp pass={[10]} />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/yes",
        element: <Yes />,
      },
    ],
  },
]);

// const jsxContainer = (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/main" element={<FunComp pass={[10]} />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   </BrowserRouter>
// );

const root = ReactDOM.createRoot(rootEL);
// root.render(jsxContainer);
root.render(<RouterProvider router={router} />);
