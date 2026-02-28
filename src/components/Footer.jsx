import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/footerlogo.png"; 
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion, useSpring, useMotionValue } from "framer-motion";
import freezeImg from "../assets/Images/freezeImg.webp";

const Footer = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(mouseX, springConfig);
  const moveY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    mouseX.set(x * 0.2);
    mouseY.set(y * 0.2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const footerNavLink = ({ isActive }) => `
    relative w-fit transition-all duration-300 text-white transform hover:scale-110 
    after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:bg-white 
    after:transition-all after:duration-300
    ${isActive ? "after:w-full text-white" : "after:w-0 hover:after:w-full text-gray-400 hover:text-white"}
    text-[14px] md:text-[16px] uppercase font-normal
  `;

  const socialIconStyle = "p-3 rounded-full border border-white text-white transition-all duration-500 hover:bg-white hover:text-black hover:scale-110";

  return (
    <footer
      className="w-full bg-black text-white pt-10 pb-5 md:pt-20 md:pb-10 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1720px] mx-auto px-5 md:px-10 lg:px-20 relative">
        
        {/* --- SECTION 1: LOGO & LINKS --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="flex flex-col gap-6 max-w-sm text-center md:text-left items-center md:items-start">
            <img src={logo} alt="flicc" className="w-32 md:w-40 lg:w-48" data-aos="zoom-in" />
            <p className="text-gray-400 text-sm md:text-base leading-relaxed" data-aos="zoom-in">
              Sharing timeless moments through the lens, capturing memories that last forever.
            </p>
            <div className="flex gap-4" data-aos="fade-up">
              <a href="#" className={socialIconStyle}><FaFacebookF size={18} /></a>
              <a href="#" className={socialIconStyle}><FaInstagram size={18} /></a>
              <a href="#" className={socialIconStyle}><FaWhatsapp size={18} /></a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10">
            {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
              <NavLink key={item} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className={footerNavLink}>
                {item}
              </NavLink>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: THE "FREEZE TIME" FIX --- */}
        <div className="w-full mb-10 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10">
          <p className="text-lg md:text-xl uppercase font-medium text-center md:text-left mb-6 md:mb-0">
            Professional <br className="hidden md:block" /> Photographer
          </p>
          
          {/* Mobile Only: Small Freeze Time */}
          <h2 className="block lg:hidden text-[15vw] leading-none uppercase font-normal tracking-tighter">
            Freeze Time
          </h2>
        </div>

        {/* Desktop Only: Huge Animated Text */}
        <div className="hidden lg:block relative w-full mb-20 pointer-events-none">
          <div className="w-full flex flex-col items-end">
            <h2 className="text-[12vw] font-normal tracking-tighter leading-[0.8] uppercase text-right">Freeze</h2>
            <h2 className="text-[12vw] font-normal tracking-tighter leading-[0.8] uppercase text-right">Time</h2>
          </div>

          {/* Magnetic Image */}
          <motion.div
            style={{ x: moveX, y: moveY }}
            className="absolute top-[20%] left-[30%] z-0 w-60 h-80"
          >
            <img src={freezeImg} alt="Floating" className="w-full h-full object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
        </div>

        {/* --- COPYRIGHT SECTION --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] md:text-xs text-gray-500 tracking-[3px]">
            © {new Date().getFullYear()} FLICC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <NavLink to="/privacy" className="text-[10px] md:text-xs text-gray-500 hover:text-white transition-all">PRIVACY POLICY</NavLink>
            <NavLink to="/terms" className="text-[10px] md:text-xs text-gray-500 hover:text-white transition-all">TERMS & CONDITIONS</NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;