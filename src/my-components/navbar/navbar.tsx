import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white bg-blue-600 px-3 py-2 rounded-md"
      : "text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md";

  return (
    <nav className="bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-white font-bold text-xl">
            <NavLink to="/">
                BackwardEmail
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
            <NavLink to="/login" className={linkClass}>
              Login
            </NavLink>
            <NavLink to="/profile" className={linkClass}>
              Profile
            </NavLink>
            <NavLink to="/privacy" className={linkClass}>
              Privacy
            </NavLink>
            <NavLink to="/terms" className={linkClass}>
              Terms of Service
            </NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-600 px-2 pt-2 pb-3 space-y-1">
          <NavLink to="/" className={linkClass} end onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/login" className={linkClass} onClick={() => setIsOpen(false)}>
            Login
          </NavLink>
          <NavLink to="/profile" className={linkClass} onClick={() => setIsOpen(false)}>
            Profile
          </NavLink>
          <NavLink to="/privacy" className={linkClass} onClick={() => setIsOpen(false)}>
            Privacy
          </NavLink>
          <NavLink to="/terms" className={linkClass} onClick={() => setIsOpen(false)}>
            Terms
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
