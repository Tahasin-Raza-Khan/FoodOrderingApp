import * as React from "react";
import {useState,useEffect} from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import Classtest from "./components/Classtest";
import Test from "./components/Test";
import Shimmer from "./components/Shimmer";
 import Cart from "./components/Cart";
import userContext from "./utils/store/context/usercontext";
import {Provider} from "react-redux"
import appStore from "./utils/store/appstore/store";

const About = React.lazy(() => import("./components/About"));

const AppLayout = () => {
const [userInfo,setUserInfo] =useState(null);
useEffect(()=>{
  const userData={
    name:"Tahasin Khan",
    email:"tkhan@neudesic.com"
  }
  setUserInfo(userData);
},[])
  return (
    <Provider store={appStore}>
      <userContext.Provider
        value={{user:userInfo}}
      >
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
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
        element: (
          <React.Suspense fallback={<Shimmer />}>
            <About />
          </React.Suspense>
        ),
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/cart",
        element: <Cart />,
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
