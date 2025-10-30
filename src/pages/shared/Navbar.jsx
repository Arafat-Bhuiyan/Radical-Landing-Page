import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling on the body when the menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when the menu is closed
      document.body.style.overflow = "auto";
    }
    // Cleanup function to restore scrolling when the component unmounts
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#1A0E1E] z-50">
      <div className="py-2 w-full md:w-11/12 xl:w-10/12 mx-auto">
        <div className="flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:inline-flex justify-start items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `h-6 text-center text-base font-unbounded leading-normal ${
                  isActive
                    ? "text-[#FF39B0] font-bold underline"
                    : "text-white font-normal hover:text-[#FF39B0]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="http://10.10.13.12:5173/our-mission"
              className={({ isActive }) =>
                `h-6 text-center text-base font-unbounded leading-normal ${
                  isActive
                    ? "text-[#FF39B0] font-bold underline"
                    : "text-white font-normal hover:text-[#FF39B0]"
                }`
              }
            >
              Our Mission
            </NavLink>

            <NavLink
              to="http://10.10.13.12:5173/about-us-details"
              className={({ isActive }) =>
                `h-6 text-center text-base font-unbounded leading-normal ${
                  isActive
                    ? "text-[#FF39B0] font-bold underline"
                    : "text-white font-normal hover:text-[#FF39B0]"
                }`
              }
            >
              About us
            </NavLink>

            <NavLink
              to="http://10.10.13.12:5173/contact"
              className={({ isActive }) =>
                `h-6 text-center text-base font-unbounded leading-normal ${
                  isActive
                    ? "text-[#FF39B0] font-bold underline"
                    : "text-white font-normal hover:text-[#FF39B0]"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            {/* Conditional Button */}
            <div className="hidden xl:block">
              <Link
                to="http://10.10.13.12:5173/signup"
                className="w-28 h-10 px-6 bg-[#FF80EB] border-stone-100 flex justify-center items-center gap-2.5 text-center text-white text-sm font-medium font-unbounded active:bg-[#C12E83] transition-colors duration-200"
              >
                Sign up
              </Link>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="xl:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X size={28} color="white" />
                ) : (
                  <Menu size={28} color="white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden fixed top-0 left-0 w-full h-full bg-[#1A0E1E] flex flex-col items-center pt-10 gap-8 z-50">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-xl font-unbounded ${
                isActive ? "text-[#FF39B0] font-bold" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="http://10.10.13.12:5173/our-mission"
            className={({ isActive }) =>
              `text-xl font-unbounded ${
                isActive ? "text-[#FF39B0] font-bold" : "text-white"
              }`
            }
          >
            Our Mission
          </NavLink>
          <NavLink
            to="http://10.10.13.12:5173/about-us-details"
            className={({ isActive }) =>
              `text-xl font-unbounded ${
                isActive ? "text-[#FF39B0] font-bold" : "text-white"
              }`
            }
          >
            About us
          </NavLink>
          <NavLink
            to="http://10.10.13.12:5173/contact"
            className={({ isActive }) =>
              `text-xl font-unbounded ${
                isActive ? "text-[#FF39B0] font-bold" : "text-white"
              }`
            }
          >
            Contact
          </NavLink>

          <Link
              to="http://10.10.13.12:5173/signup"
              className="w-28 h-10 px-6 bg-[#FF80EB] border-stone-100 flex justify-center items-center gap-2.5 text-center text-white text-sm font-medium font-unbounded active:bg-[#C12E83] transition-colors duration-200"
            >
              Sign up
            </Link>
        </div>
      )}
    </div>
  );
};
