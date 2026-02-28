import React from 'react';
import { motion } from 'framer-motion';
import MainImage from '../../assets/Images/handsomea.webp'; 
import CardImage from '../../assets/Images/girl.webp';
import Button from '../Button';

const AboutDetails = () => {
  return (
    <section data-aos="zoom-in" className="w-full bg-white flex justify-center pb-10 md:pb-20">
      <div className="w-full max-w-430 px-4 md:px-8 lg:px-15">
        
        <div className="flex flex-col lg:flex-row gap-7.5 lg:gap-10 items-start">
          
          {/* --- LEFT SIDE: Content --- */}
          <div className="w-full lg:w-[40%] flex flex-col gap-8">
            <p className="text-[#1a1a1a] text-[16px]  leading-6 font-normal text-center lg:text-left">
              I don't just take pictures — I create visual stories that 
              capture emotion and meaning. From bold commercial 
              shoots to authentic editorial moments, my lens brings 
              your vision to life. Let's collaborate to tell your story through powerful, unforgettable imagery.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              
               <Button
               text="LEARN MORE"
               showDot={true}
                to="/learn-more"
                className="bg-black text-white border-black   hover:bg-white hover:text-black hover:border-[#949494]"
               />
               <Button
               text="CONTACT NOW"
               showDot={true}
                to="/contact"
                className="bg-white text-black border-[#949494] font-medium  hover:bg-black hover:text-white hover:border-[#949494]"
               />
            </div>
          </div>

          {/* --- RIGHT SIDE: Images Grid --- */}
          {/* w-full lagaya hai taake container poori jagah le */}
          {/* --- RIGHT SIDE: Images Grid --- */}
<div className="w-full lg:w-[60%] flex flex-col md:flex-row gap-7.5 items-stretch">
  
  {/* 1. Portrait Image */}
  <motion.div 
    whileHover={{ y: -5 }}
    // Tabdeeli: Mobile/Tablet par w-full aur max-width ko hataya gaya hai
    className="relative overflow-hidden rounded-sm group hidden md:block cursor-pointer shadow-sm w-full lg:max-w-92` aspect-368/480"
  >
     <img 
      src={MainImage} 
      alt="Model" 
      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
     />
     <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
  </motion.div>

  {/* 2. Info Card Image */}
  <div 
    whileHover={{ y: -5 }}
    // Tabdeeli: Mobile/Tablet par w-full aur max-width ko hataya gaya hai
    className="relative overflow-hidden rounded-sm group cursor-pointer shadow-sm w-full lg:max-w-92 aspect-368/480"
  >
     <img 
      src={CardImage} 
      alt="Profile Card" 
      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
     />
     
     {/* Overlay Content */}
     <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
        <div className="flex flex-col gap-1"> 
          <div className="overflow-hidden">
            <motion.h3 
              className="text-white text-xl md:text-2xl font-bold uppercase tracking-tighter leading-none"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ethan Carter
            </motion.h3>
          </div>
          <p className="text-white/70 text-[10px] md:text-xs uppercase tracking-[0.2em] leading-none translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            Founder and CEO
          </p>
        </div>
     </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutDetails;