import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserLogout } from "../services/interaction";
import {
  HomeIcon,
  HeartIcon,
  CalendarDaysIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

const Navigation = ({ isLoggedIn, user, setItems,triggerRefresh }) => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await UserLogout();
      // console.log("Success:", result);
      if (result.success) {
        setItems({
          homePage: [],
          isLoggedIn: false,
          user: {},
        });
        // console.log("navigate to /");
        navigate("/");
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation(); // current route

  const isActive = (path) => pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 text-white shadow-xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-4 py-3">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          <ul className="flex items-center gap-1">
            <NavItem
              to="/"
              onClick={() => triggerRefresh(r => !r)}
              label="airbnb"
              icon={<HomeIcon className="w-5 h-5 mr-2" />}
              isActive={isActive("/")}
            />
            {isLoggedIn && user?.userType === "guest" && (
              <>
                <NavItem
                  to="/homelist"
                  label="Explore Homes"
                  icon={<HomeIcon className="w-5 h-5 mr-2" />}
                  isActive={isActive("/homelist")}
                />
                <NavItem
                  to="/favouritelist"
                  label="Favorites"
                  icon={<HeartIcon className="w-5 h-5 mr-2" />}
                  isActive={isActive("/favouritelist")}
                />
                <NavItem
                  to="/booking"
                  label="My Bookings"
                  icon={<CalendarDaysIcon className="w-5 h-5 mr-2" />}
                  isActive={isActive("/booking")}
                />
              </>
            )}

            {isLoggedIn && user?.userType !== "guest" && (
              <>
                <NavItem
                  to="/host/hosthomelist"
                  label="My Listings"
                  icon={<HomeIcon className="w-5 h-5 mr-2" />}
                  isActive={isActive("/host/hosthomelist")}
                />
                <NavItem
                  to="/host/add-home"
                  label="Add Property"
                  icon={<HomeIcon className="w-5 h-5 mr-2" />}
                  isActive={isActive("/host/add-home")}
                />
              </>
            )}
          </ul>

          <ul className="flex items-center gap-2">
            {!isLoggedIn ? (
              <>
                <NavItem
                  to="/login"
                  label="Sign In"
                  isActive={isActive("/login")}
                />
                <NavItem
                  to="/signup"
                  label="Sign Up"
                  isActive={isActive("/signup")}
                  isPrimary={true}
                />
              </>
            ) : (
              <li>
                <form onSubmit={handleSubmit} method="POST">
                  <button
                    type="submit"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 py-2 px-4 rounded-xl transition-all duration-300 flex items-center text-sm font-medium hover:scale-105"
                  >
                    <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                    Sign Out
                  </button>
                </form>
              </li>
            )}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => triggerRefresh(r => !r)}
              className={`flex items-center py-2 px-3 rounded-xl transition-all duration-300 ${
                isActive("/") ? "bg-white/20 backdrop-blur-sm font-medium" : "hover:bg-white/10"
              }`}
            >
              <HomeIcon className="w-6 h-6" />
              <span className="ml-2 font-semibold">airbnb</span>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <ul className="flex flex-col mt-3 space-y-1 border-t border-white/20 pt-3">
              {isLoggedIn && user?.userType === "guest" && (
                <>
                  <NavItem
                    to="/homelist"
                    label="Explore Homes"
                    isActive={isActive("/homelist")}
                    mobile
                  />
                  <NavItem
                    to="/favouritelist"
                    label="Favorites"
                    isActive={isActive("/favouritelist")}
                    mobile
                  />
                  <NavItem
                    to="/booking"
                    label="My Bookings"
                    isActive={isActive("/booking")}
                    mobile
                  />
                </>
              )}

              {isLoggedIn && user?.userType !== "guest" && (
                <>
                  <NavItem
                    to="/host/hosthomelist"
                    label="My Listings"
                    isActive={isActive("/host/hosthomelist")}
                    mobile
                  />
                  <NavItem
                    to="/host/add-home"
                    label="Add Property"
                    isActive={isActive("/host/add-home")}
                    mobile
                  />
                </>
              )}

              {isLoggedIn ? (
                <li className="pt-2 border-t border-white/20 mt-2">
                  <form onSubmit={handleSubmit} method="POST">
                    <button
                      type="submit"
                      className="w-full text-left py-2 px-3 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center"
                    >
                      <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </form>
                </li>
              ) : (
                <>
                  <NavItem
                    to="/login"
                    label="Sign In"
                    isActive={isActive("/login")}
                    mobile
                  />
                  <NavItem
                    to="/signup"
                    label="Sign Up"
                    isActive={isActive("/signup")}
                    mobile
                    isPrimary={true}
                  />
                </>
              )}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ to, label, isActive, icon, onClick, mobile = false, isPrimary = false }) => {
  const padding = mobile ? "py-2 px-3" : "py-2 px-4";
  const baseClasses = "rounded-xl transition-all duration-300 flex items-center text-sm font-medium";
  
  let activeClass, hoverClass;
  
  if (isPrimary) {
    activeClass = isActive ? "bg-emerald-500 shadow-lg" : "bg-emerald-500 hover:bg-emerald-600 shadow-md hover:shadow-lg";
    hoverClass = "hover:scale-105";
  } else {
    activeClass = isActive ? "bg-white/20 backdrop-blur-sm" : "hover:bg-white/10";
    hoverClass = "hover:scale-105";
  }

  return (
    <li>
      <Link to={to} onClick={onClick} className={`${padding} ${baseClasses} ${activeClass} ${hoverClass}`}>
        {icon}
        {label}
      </Link>
    </li>
  );
};

export default Navigation;
