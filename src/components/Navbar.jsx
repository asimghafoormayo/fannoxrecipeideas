import React from "react";
import { FaHome, FaUser, FaBell } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItem = useSelector((store) => store.cart);
  const cartItemCount = cartItem.length;

  return (
    <nav className="bg-red-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-20 w-20 rounded-md" src={logo} alt="Logo" />
          </div>

          {/* Center list items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="hover:bg-white hover:text-black  px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="#"
                className="hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Menu
              </Link>
              <Link
                to="#"
                className="hover:bg-white hover:text-black  px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Mobile App
              </Link>
              <Link
                to="#"
                className="hover:bg-white hover:text-black  px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <FaHome className="h-6 w-6 cursor-pointer" />
            </Link>
            <Link to="/cart" className="relative inline-block">
              <IoMdCart className="h-6 w-6 cursor-pointer" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-2 -translate-y-2">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <Link to="#">
              <FaBell className="h-6 w-6 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="#"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="#"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="#"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            to="#"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
