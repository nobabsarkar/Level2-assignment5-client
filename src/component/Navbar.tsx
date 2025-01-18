import { UserCircleIcon } from "@heroicons/react/16/solid";
import logo from "../assets/meeting.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/booking">Booking Room</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <a>
          <UserCircleIcon className="size-7 text-black"></UserCircleIcon>
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          <img style={{ width: "50px" }} src={logo} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-white font-bold">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
