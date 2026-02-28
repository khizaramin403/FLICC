import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import img1 from '../assets/Images/camerapicture.webp'; 
import img2 from '../assets/Images/blackman.webp';      
import img3 from '../assets/Images/woman.webp';         
import Button from '../components/Button'; 

const LetsCapture = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Screen size check karne ke liye
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Animations logic
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  
  // Large screen par images bahar se andar ayengi
  // -50% se 0% tak range rakhi hai taake overflow na ho
  const xLeft = useTransform(smoothProgress, [0, 0.4], ["-50%", "0%"]);
  const xRight = useTransform(smoothProgress, [0, 0.4], ["50%", "0%"]);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-white flex justify-center overflow-hidden py-10 md:py-25"
    >
      <div className="w-full max-w-[1720px] mx-auto px-5 md:px-15 relative flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen">
        
        {/* --- Corner Borders --- */}
        <div className="absolute top-0 right-5 md:right-15 w-12 h-12 border-t-2 border-r-2 border-black md:w-20 md:h-20" />
        <div className="absolute bottom-0 left-5 md:left-15 w-12 h-12 border-b-2 border-l-2 border-black md:w-20 md:h-20" />

        <div className="relative w-full flex flex-col items-center z-10">
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-10 md:mb-16 w-full">
            
            {/* Left Image (Blackman) */}
            <motion.div
              style={{ x: isMobile ? 0 : xLeft }}
              className="w-52 h-64 md:w-58 md:h-75 overflow-hidden shadow-2xl shrink-0 z-0"
            >
              <img src={img2} alt="Left" className="w-full h-full object-cover" />
            </motion.div>

            {/* Center Camera (Lens) */}
            <motion.div 
              style={{ rotate }}
              className="w-48 h-48 md:w-70 md:h-70 z-20 flex-shrink-0"
            >
              <img src={img1} alt="Lens" className="w-full h-full object-contain drop-shadow-2xl" />
            </motion.div>

            {/* Right Image (Woman) */}
            <motion.div
              style={{ x: isMobile ? 0 : xRight }}
              className="w-52 h-64 md:w-58 md:h-75 overflow-hidden shadow-2xl shrink-0 z-0"
            >
              <img src={img3} alt="Right" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* --- Bottom Text & Button --- */}
          <div className="text-center flex flex-col items-center gap-6 md:gap-10">
            <h2 className="text-[12vw] md:text-[80px] lg:text-[140px] font-black leading-[0.9] tracking-tighter text-black uppercase">
              Let’s Capture <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px black' }}>
                Your Vision
              </span>
            </h2>

            <div className="flex justify-center mt-4">
              <Button 
                text="Contact Now" 
                showDot={true} 
                to="/contact"
                className="bg-black text-white hover:bg-white hover:text-black border-black border transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsCapture;