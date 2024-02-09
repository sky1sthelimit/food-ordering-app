import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//body and its components

//lazy loading Grocery Component
//AKA Code Splitting, Dynamic Bundling, on Demand Loading
const GroceryLazy = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <h3>Contact Us!</h3>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Any fallback function</h2>}>
            <GroceryLazy />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <h3>About US!</h3>,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
