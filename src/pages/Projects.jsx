// src/pages/Projects.jsx
import React from 'react';
import { motion } from "framer-motion";
import rotatinglens from "../assets/Images/rotatinglens.svg";
import WorkList from '../components/WorkComponent/WorkList';
import { allWorkData } from '../components/WorkComponent/WorkData';     
import Button from '../components/Button';

const Projects = () => {
   // Requirement: Default 6 cards dikhane hain
   const firstSix = allWorkData.slice(0, 6);

  return (
     <section className="w-full bg-white flex justify-center py-14 md:py-20 lg:py-37.5 overflow-hidden">
      <div className="w-full max-w-[1720px] px-4 md:px-8 lg:px-15"> {/* max-w ko theek kiya */}
        
        <div data-aos="zoom-in" className="flex items-center justify-center gap-2.5 mb-5">
          <motion.img
            src={rotatinglens}
            alt="lens"
            className="w-6 h-6 md:w-8 md:h-8 brightness-0 "
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
          <h2 className="text-[16px] font-bold uppercase text-black text-center">Projects</h2>
        </div>

        <div data-aos="zoom-in" className="w-full mb-10 md:mb-20">
          <h1 className="text-[48px] md:text-[80px] lg:text-[190px] leading-none font-normal uppercase tracking-wider text-black text-center">
            Work
          </h1>
        </div>

        <div className="mt-7.5 md:mt-15 lg:mt-20 w-full">
          <WorkList displayData={firstSix} />
        </div>

        <div className="flex justify-center mt-10 md:mt-20">
            <Button 
                text="Next Page" 
                showDot={true} 
                to="/work-next-page" 
                className="bg-black text-white font-medium border-[#949494] hover:bg-white hover:text-black"
            />
        </div>
      </div>
    </section>
  )
}

export default Projects;