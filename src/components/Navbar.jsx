import React, { useEffect, useState, useRef} from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Images/logo.svg";
import Button from "./Button";
import MegaMenu from "./MegaMenu";
import { LuText, LuChevronDown, LuX } from "react-icons/lu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const location = useLocation();

  // Animation classes for links
  const linkClasses =
    "relative text-[16px] font-normal  leading-6 uppercase py-1 text-black hover:font-semibold transform transition duration-300 hover:scale-110  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full ";
  const activeLink = "text-black font-semibold after:w-full ";

  const menuRef = useRef(null); // 2. Ref create karein

  // 3. Click Outside Logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Agar click menu ke bahar hua hai, toh menu band kar do
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
      }
    };

    if (isMegaMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMegaMenuOpen]);

  

  return (
    <nav className="w-full bg-white relative z-100">
      <div className="max-w-430 mx-auto lg:py-3.75 px-4 md:px-8 lg:px-15 flex justify-between items-center text-black font-semibold">
        <div className="logo">
          <NavLink
            to="/"
            className="flex items-center gap-2 md:gap-2.5 lg:gap-3.75 uppercase text-[18px] sm:text-[22px] md:text-[24px] lg:text-[27px] font-medium leading-9.5"
          >
            <img src={logo} alt="" className="h-6.25 md:h-12" />
            Flicc
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7.5">
          <div className="nav-bar flex justify-center items-center gap-6.25">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeLink : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeLink : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeLink : ""}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeLink : ""}`
              }
            >
              Services
            </NavLink>

            {/* Pages / MegaMenu Trigger */}
            {/* <div ref={menuRef} className="relative cursor-pointer group" onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)} >
              <div
                className={`flex items-center gap-1 uppercase text-[16px] font-normal py-1 transform transition duration-300 hover:scale-110      ${isMegaMenuOpen ? "text-black font-semibold after:w-full" : "text-black  hover:font-semibold"}
                  relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-black 
        after:transition-all after:duration-300 group-hover:after:w-full
        ${isMegaMenuOpen ? "after:w-full" : "after:w-0"}       `}
              >
                Pages
                <LuChevronDown
                  size={20}
                  className={`transition-transform duration-300 font-semibold ${isMegaMenuOpen ? "rotate-180 text-black" : "rotate-0"}`}
                />
              </div>
            </div> */}
          </div>

          <div className="cnt-btn">
            <Button
              showDot
              text={"Contact"}
              to={"/contact"}
              className="uppercase font-medium text-[16px] border-[#949494] hover:bg-black hover:text-white  leading-6 text-black"
            />
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden block">
          <button className="p-2.5" onClick={() => setIsOffcanvasOpen(true)}>
            <LuText size={24} />
          </button>
        </div>
      </div>

      {/* MegaMenu Shutter Animation */}
      <div
        className={`absolute right-30 w-max rounded-xl shadow-2xl bg-black overflow-hidden transition-all duration-350 ease-linear  ${isMegaMenuOpen ? "max-h-65  opacit-100" : "max-h-0 opacity-0"} `}
      >
        <MegaMenu currentPath={location.pathname} closeMenu={() => setIsMegaMenuOpen(false)} />
      </div>

      {/* Offcanvas Side Menu */}
      <MobileMenu isOpen={isOffcanvasOpen} onClose={() => setIsOffcanvasOpen(false)}/>
     
    </nav>
  );
};

export default Navbar;
