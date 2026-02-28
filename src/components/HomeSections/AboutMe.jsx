// import React from 'react'
// import rotatinglens from '../../assets/Images/rotatinglens'

// const AboutMe = () => {
//   return (
//     <div>AboutMe</div>
//   )
// }

// export default AboutMe



import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import rotatinglens from '../../assets/Images/rotatinglens.svg';

const AboutMe = () => {
  const targetRef = useRef(null);
  const text = "The journey of a photographer who sees beauty in every frame";
  
  // Text ko words mein split kar rahe hain reveal effect ke liye
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "end 0.5"] 
  });

  return (
    <section 
      ref={targetRef}
      className="w-full bg-white flex justify-center items-center"
      style={{ paddingTop: 'clamp(60px, 8vw, 100px)', paddingBottom: 'clamp(40px, 6vw, 80px)' }}
    >
      <div className="w-full max-w-430 px-4 md:px-8 lg:px-15 flex flex-col items-center">
        
        {/* --- About Me Header --- */}
        <div className="flex items-center gap-2 mb-5">
          {/* Snappy Tire Rotation Effect */}
          <motion.img 
            src={rotatinglens} 
            alt="lens" 
            className="w-6 h-6 md:w-8 md:h-8"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "backInOut", // Ye "tezi se ghoom kar wapis rukne" wala effect deta hai
              repeatDelay: 1 // Har 1 second baad rotate hoga
            }}
          />
          <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-black">
            About Me
          </span>
        </div>

        {/* --- Word-by-Word Scroll Reveal Text --- */}
        <div data-aos="zoom-in-up" className="w-full text-center">
          <h2 className="text-[34px] md:text-[60px] lg:text-[96px] font-medium leading-10 md:leading-17.5 lg:leading-24  tracking-normal lg:tracking-wider uppercase max-w-350 mx-auto flex flex-wrap justify-center gap-x-[0.3em]">
            {words.map((word, i) => {
              // Har word ke liye alag scroll range calculate ho rahi hai
              const start = i / words.length;
              const end = start + (1 / words.length);
              
              return (
                <Word key={i} range={[start, end]} progress={scrollYProgress}>
                  {word}
                </Word>
              );
            })}
          </h2>
        </div>

      </div>
    </section>
  );
};

// Har word ka apna reveal component
const Word = ({ children, range, progress }) => {
  // Is word ki opacity scroll ke mutabiq 0.2 (#8e8e8e) se 1 (Black) hogi
  const opacity = useTransform(progress, range, [0.2, 1]);
  
  return (
    <span className="relative">
      <motion.span style={{ opacity }} className="text-black">
        {children}
      </motion.span>
    </span>
  );
};

export default AboutMe;