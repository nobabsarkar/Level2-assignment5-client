import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
