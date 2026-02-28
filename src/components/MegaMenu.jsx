import React from "react";
import { NavLink } from "react-router-dom";

const MegaMenu = ({ currentPath, closeMenu }) => {
  const columnTitle = "text-white text-[18px] font-bold mb-[30px]";

  const linkStyle = "text-white text-[15px] font-normal hover:text-white transition-colors relative inline-block w-fit after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";
  
  const activeLink = "text-white after:w-full";

  return (
    <div className="  p-10  flex justify-between items-start gap-10">
      {/* Column 1: PAGES */}
      <div className="">
        <h3 className={columnTitle}>PAGES</h3>
        <div className="flex flex-col gap-3.75">
        <NavLink to="/portfolio" onClick={closeMenu} className={`${linkStyle} ${currentPath === "/portfolio" ? activeLink : ""}`}>Portfolio</NavLink>
        <NavLink to="/blogs" onClick={closeMenu} className={`${linkStyle} ${currentPath === "/blogs" ? activeLink : ""}`}>Blogs</NavLink>
        <NavLink to="/prices" onClick={closeMenu} className={`${linkStyle} ${currentPath === "/prices" ? activeLink : ""}`}>Prices Plan</NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={`${linkStyle} ${currentPath === "/contact" ? activeLink : ""}`}>Contact</NavLink>
        </div>
      </div>

      {/* Column 2: CMS */}
      <div className="">
        <h3 className={columnTitle}>CMS</h3>
        <div className="flex flex-col gap-3.75">
        <NavLink to="/blog-details" onClick={closeMenu} className={`${linkStyle} ${currentPath === "/blog-details" ? activeLink : ""}`}>Blogs Details</NavLink>
        <NavLink to="/service-details" onClick={closeMenu} className={`${linkStyle} ${currentPath === "/service-details" ? activeLink : ""}`}>Services Details</NavLink>
        </div>
      </div>

      {/* Column 3: UTILITY */}
      <div className="">
        <h3 className={columnTitle}>UTILITY</h3>
        <div className="flex flex-col gap-3.75">
        <NavLink to="/license" onClick={closeMenu} className={`${linkStyle} ${currentPath === "/license" ? activeLink : ""}`}>License</NavLink>
        <NavLink to="/changelog" onClick={closeMenu} className={`${linkStyle} ${currentPath === "/changelog" ? activeLink : ""}`}>Changelog</NavLink>
        </div>
      </div>

      
    </div>
  );
};

export default MegaMenu;