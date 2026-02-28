import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      // Yahan mix-blend-difference add kiya gaya hai
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-9999 cursor-pointer mix-blend-difference"
      onClick={scrollToTop}
    >
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/40 rounded-full shadow-xl group transition-all duration-300">
        
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <motion.circle
            cx="50%"
            cy="50%"
            r="40%"
            stroke="white" // White rehne dein, ye automatic black ho jayega white section par
            strokeWidth="2"
            fill="transparent"
            style={{ pathLength: smoothProgress }}
            className="opacity-100" // Opacity full rakhein taake blend saaf nazar aaye
          />
        </svg>

        <motion.div
          whileHover={{ y: -2 }}
          className="text-white z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BackToTop;