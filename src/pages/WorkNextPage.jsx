// src/pages/WorkNextPage.jsx
import React from 'react';
import { motion } from "framer-motion";
import rotatinglens from "../assets/Images/rotatinglens.svg";
import WorkList from '../components/WorkComponent/WorkList';
import { allWorkData } from '../components/WorkComponent/WorkData'; // Fix: Import correctly
import Button from '../components/Button';

const WorkNextPage = () => {
    // Yahan hum 6th index se aage ka sara data utha rahe hain (7th card onwards)
    const remainingProjects = allWorkData.slice(6);

  return (
     <section className="w-full bg-white flex justify-center py-14 md:py-20 lg:py-37.5 overflow-hidden">
      <div className="w-full max-w-[1720px] px-4 md:px-8 lg:px-15">
        
        <div data-aos="zoom-in" className="flex items-center justify-center gap-2.5 mb-5">
          <motion.img
            src={rotatinglens}
            alt="lens"
            className="w-6 h-6 md:w-8 md:h-8 brightness-0 "
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
          <h2 className="text-[16px] font-bold uppercase text-black text-center">More Projects</h2>
        </div>

        <div data-aos="zoom-in" className="w-full mb-10 md:mb-20">
          <h1 className="text-[48px] md:text-[80px] lg:text-[190px] leading-none font-normal uppercase tracking-wider text-black text-center">
            Work
          </h1>
        </div>

        <div className="mt-7.5 md:mt-15 lg:mt-20 w-full">
          {remainingProjects.length > 0 ? (
            <WorkList displayData={remainingProjects} />
          ) : (
            <p className="text-center text-gray-500 py-20 uppercase font-bold tracking-widest">
              No more projects to show at the moment.
            </p>
          )}
        </div>

        <div className="flex justify-center mt-10 md:mt-20">
            <Button 
                text="Previous Page" 
                showDot={true} 
                to="/projects" 
                className="bg-black text-white font-medium border-[#949494] hover:bg-white hover:text-black"
            />
        </div>
      </div>
    </section>
  )
}

export default WorkNextPage;