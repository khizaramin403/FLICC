import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import img1 from '../assets/Images/camerapicture.webp'; 
import img2 from '../assets/Images/blackman.webp';      
import img3 from '../assets/Images/woman.webp';         
// Maan lete hain button component ka naam 'Button' hai
import Button from '../components/Button'; 

const LetsCapture = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // 1. Camera Rotation on Scroll
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);

  // 2. Image Docking (Perfect Left-Right as you liked)
  const xLeft = useTransform(smoothProgress, [0, 0.5], ["-100%", "0%"]);
  const xRight = useTransform(smoothProgress, [0, 0.5], ["100%", "0%"]);

  return (
    <>
    <section 
      ref={containerRef}
      className="w-full bg-white flex justify-center overflow-hidden py-25"
    >
      <div className="w-full max-w-430 mx-auto px-5 md:px-15 relative flex flex-col items-center justify-center min-h-screen">
        
        {/* --- Corner Borders --- */}
        <div className="absolute top-0 right-5 md:right-15 w-16 h-16 border-t-2 border-r-2 border-black md:w-20 md:h-20" />
        <div className="absolute bottom-0 left-5 md:left-15 w-16 h-16 border-b-2 border-l-2 border-black md:w-20 md:h-20" />

        {/* --- Main Visual Container --- */}
        <div className="relative w-full flex flex-col items-center z-10">
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-16 w-full">
            
            {/* Left Image (233x300) */}
            <motion.div
              style={{ x: xLeft }}
              className="w-58.25 h-75 overflow-hidden shadow-2xl shrink-0"
            >
              <img src={img2} alt="Left" className="w-full h-full object-cover" />
            </motion.div>

            {/* Center Camera (280x280) */}
            <motion.div 
              style={{ rotate }}
              className="w-70 h-70 z-20 flex-0"
            >
              <img src={img1} alt="Lens" className="w-full h-full object-contain drop-shadow-2xl" />
            </motion.div>

            {/* Right Image (233x300) */}
            <motion.div
              style={{ x: xRight }}
              className="w-58.25 h-75 overflow-hidden shadow-2xl flex-0"
            >
              <img src={img3} alt="Right" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* --- Bottom Text & Button --- */}
          <div className="text-center flex flex-col items-center gap-10 md:gap-14">
            <h2 className="text-[40px] md:text-[80px] lg:text-[150px] font-black leading-[0.85] tracking-tighter text-black uppercase">
              Let’s Capture <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>
                Your Vision
              </span>
            </h2>

            {/* Aapka Button Component */}
            <motion.div className="flex justify-center mt-6 md:mt-10">
            <Button 
                text="Contact Now" 
                showDot={true} 
                to="/contact" // Jahan aap bhejnah chahen
                className="bg-black text-white  font-medium border-[#949494] hover:bg-white hover:text-black"
            />
        </motion.div>
          </div>
          

        </div>
        
      </div>
      
    </section>
    
            </>
  );
};

export default LetsCapture;