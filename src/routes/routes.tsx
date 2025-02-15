import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../component/MeetingRoom";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import SingleBooking from "../component/SingleBooking";
import ProtectedRoute from "../component/layouts/ProtectedRoute";
import BookingPage from "../component/BookingPage";

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
        path: "/singleBooking/:id",
        element: (
          <ProtectedRoute>
            <SingleBooking></SingleBooking>
          </ProtectedRoute>
        ),
      },
      {
        path: "/bookingPage",
        element: <BookingPage></BookingPage>,
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
