import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "active text-red-500 font-bold" : ""
        }
      >
        Shop
      </NavLink>
      <NavLink
        to={"/mens"}
        className={({ isActive }) =>
          isActive ? "active text-red-500 font-bold" : ""
        }
      >
        Men
      </NavLink>
      <NavLink
        to={"/womens"}
        className={({ isActive }) =>
          isActive ? "active text-red-500 font-bold" : ""
        }
      >
        Women
      </NavLink>
      <NavLink
        to={"/kids"}
        className={({ isActive }) =>
          isActive ? "active text-red-500 font-bold" : ""
        }
      >
        Kids
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gradient-to-b from-pink-200 to-gray-200 rounded">
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
              {navLink}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-[20%]" src={logo} alt="" />
            <a className="text-2xl font-semibold">
              Bangla<span className="text-red-600 font-bold">Mart</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-base font-semibold">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Link to={"/cart"} className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </Link>
          </div>
          <Link to={"/register"} className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
