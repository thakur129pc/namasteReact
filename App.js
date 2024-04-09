import React, { useState, useEffect, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import noData, { data } from "./imp";
import About from "./About";
import myContext from "./myContext";
const Yes = lazy(() => import("./Yes"));
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
import Data from "./Data";

const rootEL = document.getElementById("root");

// React element using React.createElement()
// const container = React.createElement("div", { id: "container" }, [
//   React.createElement("h1", { id: "heading-1" }, "Namaste"),
//   React.createElement("h2", { id: "heading-2" }, "React"),
//   React.createElement("h3", { id: "paragraph" }, "Course"),
// ]);
// Functional Component
const FunComp = ({ pass }) => {
  const [data, setData] = useState("Nitin");
  return (
    <myContext.Provider value={{ appData: data, setData }}>
      <div>
        {pass}
        <Link to="/about">To about</Link>
        <Outlet data={data} />
      </div>
    </myContext.Provider>
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
        element: (
          <Suspense fallback={<div>Hello</div>}>
            <Yes />
          </Suspense>
        ),
      },
      {
        path: "/data/:id/:name",
        element: <Data />,
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
