import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestuarantsMenu from "./Components/RestaurantMenu";
import { lazy, Suspense, useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./Components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const userInfo = {
      name: "Salona Dubey",
    };
    setUserName(userInfo.name);
  }, []);

  return (
    <Provider store={AppStore}>
    <div className="app">
      <UserContext.Provider value={{ loggedinUser: userName , setUserName}}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
    </Provider>
  );
};

const Grocery = lazy(() => import("./Components/Grocery"));

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestuarantsMenu />,
      },
      {
        path : "/cart",
        element : <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
