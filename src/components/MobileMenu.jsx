import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LuX, LuChevronDown } from "react-icons/lu";

const MobileMenu = ({ isOpen, onClose }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // 1. Keyboard Support (ESC Key se close hona)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Background scroll rokne ke liye
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Modern Link Animation Class
  const mobileLinkClasses = ({ isActive }) => 
    `relative text-[16px] uppercase font-medium transition-all duration-300 py-2 border-b border-white flex justify-between items-center
    ${isActive ? "text-gray-500" : "text-white hover:text-white"}`;

    // Link ki common classes (Underline logic ke sath)
const subLinkClasses = ({ isActive }) => `
  relative w-fit text-white text-[16px] font-normal leading-6 transition-all duration-300 
  hover:translate-x-1 
  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-white 
  after:transition-all after:duration-300
  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
`;

  return (
    <>
      {/* 2. Background Overlay with Blur (Shadcn Style) */}
      <div
        className={`fixed inset-0 z-200 transition-all duration-300 ease 
        ${isOpen ? "bg-black/60 backdrop-blur-sm opacity-100 visible" : "bg-black/0 backdrop-blur-none opacity-0 invisible "}`}
        onClick={onClose}
      />

      {/* 3. Offcanvas Panel with Smooth Slide */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-78.5 bg-black z-201 p-8 shadow-2xl transition-transform duration-500 e 
        ${isOpen ? "translate-x-0" : "translate-x-full "} overflow-y-auto no-scrollbar`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-10">
          <button 
            onClick={onClose}
            className=" hover:bg-gray-800 rounded-full transition-colors duration-300"
          >
            <LuX size={32} className="text-white" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <NavLink to="/" onClick={onClose} className={mobileLinkClasses}>Home</NavLink>
          <NavLink to="/about" onClick={onClose} className={mobileLinkClasses}>About</NavLink>
          <NavLink to="/projects" onClick={onClose} className={mobileLinkClasses}>Projects</NavLink>
          <NavLink to="/services" onClick={onClose} className={mobileLinkClasses}>Services</NavLink>

          {/* 4. Accordion (Pages) Logic */}
          {/* <div className="flex flex-col border-b border-white">
            <button 
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              className="flex items-center justify-between text-[16px] uppercase font-medium text-white hover:text-gray-500 py-4 transition-all"
            >
              <span>Pages</span>
              <LuChevronDown 
                className={`transition-transform duration-500 ${isAccordionOpen ? "rotate-180" : "rotate-0"}`} 
              />
            </button>

            
<div className={`overflow-hidden transition-all duration-500 ease-in-out 
  ${isAccordionOpen ? "max-h-200 mb-6" : "max-h-0"}`}>
  
  <div className="grid grid-cols-2 gap-x-4 gap-y-8 pl-4 pt-6">
    
    <div className="flex flex-col gap-3">
      <h4 className="text-[18px] font-medium text-white leading-5.75 uppercase mb-1">Pages</h4>
      <NavLink to="/portfolio" onClick={onClose} className={subLinkClasses}>Portfolio</NavLink>
      <NavLink to="/blogs" onClick={onClose} className={subLinkClasses}>Blogs</NavLink>
      <NavLink to="/prices" onClick={onClose} className={subLinkClasses}>Prices Plan</NavLink>
      <NavLink to="/contact" onClick={onClose} className={subLinkClasses}>Contact</NavLink>
    </div>

    <div className="flex flex-col gap-3">
      <h4 className="text-[18px] font-medium text-white leading-5.75 uppercase mb-1">CMS</h4>
      <NavLink to="/blog-details" onClick={onClose} className={subLinkClasses}>Blogs Details</NavLink>
      <NavLink to="/service-details" onClick={onClose} className={subLinkClasses}>Services Details</NavLink>
    </div>

    <div className="flex flex-col gap-3">
      <h4 className="text-[18px] font-medium text-white leading-5.75 uppercase mb-1">Utility</h4>
      <NavLink to="/license" onClick={onClose} className={subLinkClasses}>License</NavLink>
      <NavLink to="/changelog" onClick={onClose} className={subLinkClasses}>Changelog</NavLink>
    </div>

  </div>
</div>
          </div> */}

          
        </div>
      </div>
    </>
  );
};

export default MobileMenu;