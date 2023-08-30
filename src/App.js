import * as React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import Classtest from "./components/Classtest";
import Test from "./components/Test";

const AppLayout = () => {
  return (
    <div className="AppLayout">
     <Header/>
      <Outlet />
      <Footer />
    </div>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/test",
        element: <Test />,
      },
      {
        path: "/contact",
        element: <Contact />,
        children: [
          {
            path: "officelocations",
            element: <Classtest />,
          },
        ],
      },
      {
        path: "/restro/:resId",
        element: <RestroMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
