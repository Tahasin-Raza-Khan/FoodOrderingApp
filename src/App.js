import * as React from "react";
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
import store from "../src/utils/store/context/store"

const About = React.lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = React.useState({
    name: "Tahasin Khan",
    email: "tkhanballia@gmail.com",
    loggedInLocation: "Jamshedpur",
  });
  return (
    <Provider store={store}>
      <userContext.Provider
        value={{
          user: userName,
        }}
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
