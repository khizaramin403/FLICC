// import React from 'react'

// const Footer = () => {
//   return (
//     <>
//     <footer className="w-full bg-black text-white py-10">
//       <div className="max-w-430 mx-auto px-4 md:px-8 lg:px-15 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-5">

//       </div>
//     </footer>
//     </>
//   )
// }

// export default Footer

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/footerlogo.png"; // Apna logo path check karlein
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { motion, useSpring, useMotionValue } from "framer-motion";
import freezeImg from "../assets/Images/freezeImg.webp";

const Footer = () => {
  // --- Magnetic Image Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring effect taake movemenmt smooth ho (escape wala feel)
  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(mouseX, springConfig);
  const moveY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Cursor ki position calculate karna container ke center se
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Image ko thora zyada move karwana (multiplier 0.2)
    mouseX.set(x * 0.2);
    mouseY.set(y * 0.2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Common Animation Classes for Footer Links
  const footerNavLink = ({ isActive }) => `
    relative w-fit transition-all duration-300 text-white transform hover:scale-110 
    after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:bg-white 
    after:transition-all after:duration-300
    ${isActive ? "after:w-full text-white" : "after:w-0 hover:after:w-full text-gray-400 hover:text-white"}
    text-[14px] md:text-[16px] uppercase font-normal
  `;

  const socialIconStyle =
    "p-3.75 rounded-full  border border-white text-white transition-all duration-500 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] ";

  return (
    <footer
      className="w-full bg-black text-white pt-10 pb-5 md:pt-20 md:pb-10 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-430 mx-auto px-4 md:px-8 lg:px-15 relative">
        {/* Main Content Grid */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          {/* Left Side: Logo & Description */}
          <div className="flex flex-col gap-4 max-w-sm w-full sm:items-center md:items-start text-center md:text-left">
            <div
              data-aos="zoom-in"
              className="logo flex items-center gap-3 justify-center md:justify-start"
            >
              <img
                src={logo}
                alt="flicc logo"
                className="w-25 h-8.75 sm:w-28.75 sm:h-10 md:w-35 md:h-12.5 lg:w-45 lg:h-15"
              />
              {/* <span className="text-2xl font-medium uppercase tracking-wider">flicc</span> */}
            </div>
            <p
              data-aos="zoom-in"
              className="text-white text-[16px] font-normal text-sm md:text-base leading-6"
            >
              Sharing timeless moments through the lens, capturing memories that
              last forever.
            </p>

            {/* Social Icons - Modern Animation */}
            <div className="flex gap-7.5 mt-2 justify-center md:justify-start">
              <a
                data-aos="fade-up"
                data-aos-delay="0"
                href="https://www.facebook.com/"
                target="_blank"
                className={socialIconStyle}
              >
                <FaFacebookF size={22} />
              </a>
              <a
                data-aos="fade-up"
                data-aos-delay="100"
                href="https://www.instagram.com/khizar_balouch/"
                target="_blank"
                className={socialIconStyle}
              >
                <FaInstagram size={22} />
              </a>
              <a
                data-aos="fade-up"
                data-aos-delay="200"
                href="https://wa.me/923086321448"
                className={socialIconStyle}
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>

          {/* Right Side: Navigation Links (Responsive Gap) */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-2.5 md:gap-x-4 lg:gap-x-6.25 gap-y-2.5 md:gap-y-4 lg:gap-y-6.25 w-full md:w-auto">
            <NavLink
              data-aos="fade-up"
              data-aos-delay="0"
              to="/"
              className={footerNavLink}
            >
              Home
            </NavLink>
            <NavLink
              data-aos="fade-up"
              data-aos-delay="100"
              to="/about"
              className={footerNavLink}
            >
              About
            </NavLink>
            <NavLink
              data-aos="fade-up"
              data-aos-delay="200"
              to="/projects"
              className={footerNavLink}
            >
              Projects
            </NavLink>
            <NavLink
              data-aos="fade-up"
              data-aos-delay="300"
              to="/services"
              className={footerNavLink}
            >
              Services
            </NavLink>
            <NavLink
              data-aos="fade-up"
              data-aos-delay="400"
              to="/contact"
              className={footerNavLink}
            >
              Contact
            </NavLink>
            {/* <NavLink
              data-aos="fade-up"
              data-aos-delay="500"
              to="/prices"
              className={footerNavLink}
            >
              Pricing
            </NavLink>
            <NavLink
              data-aos="fade-up"
              data-aos-delay="600"
              to="/license"
              className={footerNavLink}
            >
              License
            </NavLink> */}
          </div>
        </div>

        {/* 1. TOP SECTION: Professional Photographer & Animated Line */}
        <div className="w-full mb-4 flex flex-col md:flex-row justify-between items-center">
          <p
            data-aos="zoom-in"
            className="text-[18px] md:text-[20px] uppercase  leading-6.5 font-medium "
          >
            Professional <br className="hidden md:block lg:hidden" />
            Photographer
          </p>
          <p className="block lg:hidden text-[42px] md:text-[52px] uppercase  font-normal ">
            Freeze Time
          </p>
        </div>

        {/* 2. CENTER SECTION: FREEZE TIME & IMAGE */}
        <div
          data-aos="zoom-in-up"
          className="lg:block relative w-full flex flex-col items-end mb-7.5 pointer-events-none"
        >
          {/* Container for both words to keep them Right-Aligned */}
          <div className="w-full flex flex-col items-end">
            {/* FREEZE - Right Aligned */}
            <h2 className=" relative z-20 text-[12vw] lg:text-[235px]  font-normal tracking-wider  leading-58.75 select-none text-white uppercase text-right">
              Freeze
            </h2>

            {/* TIME - Right Aligned */}
            <h2 className=" relative z-20 text-[12vw] lg:text-[235px] font-normal tracking-wider leading-58.75 select-none text-white  uppercase text-right">
              Time
            </h2>
          </div>

          {/* Magnetic Floating Image - Placed under 'F' of FREEZE */}
          <motion.div
            style={{ x: moveX, y: moveY }}
            className="hidden lg:block absolute top-[41.5%] right-[58.25%] z-0 w-51.25 h-61.25"
          >
            <img
              src={freezeImg}
              alt="Floating"
              className="w-full h-full object-fit rotate-[deg] rounded-lg shadow-2xl"
              style={{
                transformStyle: "preserve-3d", // As per your CSS
                backfaceVisibility: "hidden",
              }}
            />
          </motion.div>
        </div>

        {/* Animated Border Line (Center se expand hone wali) */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ scaleX: 0 }} // Shuru mein width zero (scale ke zariye)
            whileInView={{ scaleX: 1 }} // Screen par aate hi full width
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ originX: 0.5 }} // Ye line ko CENTER se expand karta hai
            className="h-px md:h-0.5 bg-white opacity-50 w-full"
          />
        </div>

        {/* --- COPYRIGHT SECTION --- */}
        <div className="mt-6 border-t border-white/10 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left Side: Copyright Text */}
            <p
              data-aos="zoom-in"
              className="text-white-500 text-[12px] md:text-[14px] uppercase tracking-widest order-2 md:order-1"
            >
              © {new Date().getFullYear()} FLICC. ALL RIGHTS RESERVED.
            </p>

            {/* Right Side: Policy Links */}
            <div className="flex gap-6 md:gap-10 order-1 md:order-2">
              <NavLink
                data-aos="zoom-in"
                to="/privacy-policy"
                className="text-white-500 hover:text-white text-[12px] md:text-[14px] uppercase tracking-widest transition-colors duration-300"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                data-aos="zoom-in"
                to="/terms-conditions"
                className="text-white-500 hover:text-white text-[12px] md:text-[14px] uppercase tracking-widest transition-colors duration-300"
              >
                Terms & Conditions
              </NavLink>
            </div>
          </div>

          {/* Optional: Design Credit (Jese Flicc par "Made in Webflow" hai) */}
          <div className="mt-2 flex justify-center md:justify-start">
            <p
              data-aos="zoom-in"
              className="text-[10px] text-white-700 uppercase tracking-tighter"
            >
              Designed by Khizar Balouch
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
