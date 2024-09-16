import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import RestaurantCard from "./src/Components/RestaurantCard";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />
      },

  {
    path:"/about",
    element:<About />
  },

  {
    path:"/contact",
    element:<Contact />
  },
],

errorElement:<Error/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
