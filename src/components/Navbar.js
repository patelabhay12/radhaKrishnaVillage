import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LOGO from "../assets/final_logo.jpg";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "GALLERY", path: "/gallery" },
    { name: "E-BOOKS", path: "/ebooks" },
     { name: "Donation", path: "/donation" },
    { name: "ACTIVITIES", path: "/activities" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#6b195a] via-[#8b1e6f] to-[#f56a01] shadow-xl sticky top-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={LOGO}
            alt="Radha Krishna Logo"
            className="h-12 w-12 rounded-full border-2 border-[#ffd27f] shadow-md hover:scale-105 transition-transform duration-300"
          />
          <span className="text-white font-bold text-lg sm:text-xl tracking-wide hidden sm:block">
            RKGVK
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative font-semibold text-lg tracking-wide transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-[#ffd27f] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#ffd27f] after:left-0 after:-bottom-1"
                  : "text-white hover:text-[#ffd27f]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-b from-[#6b195a] via-[#8b1e6f] to-[#f56a01] px-6 pb-6 pt-2 flex flex-col space-y-4 shadow-inner transition-all duration-500">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block font-semibold text-lg transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-[#ffd27f] border-[#ffd27f] pb-1"
                  : "text-white hover:text-[#ffd27f]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
