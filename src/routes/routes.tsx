import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../component/MeetingRoom";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
