import { UserCircleIcon } from "@heroicons/react/16/solid";
import logo from "../assets/meeting.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOut } from "../redux/api/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/login");
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/booking">Meeting Room</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      {user?.role ? (
        <>
          {user?.role === "ADMIN" ? (
            <>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center btn-circle"
                >
                  <a>
                    <UserCircleIcon className="size-7 text-black"></UserCircleIcon>
                  </a>
                </div>
                <ul
                  tabIndex={0}
                  className="menu p-3 text-black menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>Dashboard</a>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>LotOut</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn ">
                  <a>
                    <UserCircleIcon className="size-7 text-black"></UserCircleIcon>
                  </a>
                </div>
                <ul
                  tabIndex={0}
                  className="menu p-3 text-black menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li className="btn">
                    <a>My Bookings</a>
                  </li>
                  <li className="btn mt-3">
                    <a onClick={handleLogOut}>LotOut</a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
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
            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          <img style={{ width: "50px" }} src={logo} alt="" />
          <h1 className="text-white font-bold">Booking Room</h1>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu flex items-center menu-horizontal px-1 text-white font-bold">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
