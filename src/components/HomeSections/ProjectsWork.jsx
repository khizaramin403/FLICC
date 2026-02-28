import React from 'react'
import { motion } from "framer-motion";
import rotatinglens from "../../assets/Images/rotatinglens.svg";
import Button from '../../components/Button';
import WorkList from '../WorkComponent/WorkList';
// 1. Data import karein
import { allWorkData } from '../WorkComponent/WorkData'; 

const ProjectsWork = () => {

  // 2. Logic: Sirf pehle 4 projects dikhane ke liye slice karein
  const homeProjects = allWorkData.slice(0, 4);

  return (
     <section className="w-full bg-white flex justify-center py-14 md:py-20 lg:py-37.5 overflow-hidden">
      <div className="w-full max-w-430 px-4 md:px-8 lg:px-15"> {/* max-w ko theek kiya */}
        
        {/* 1. Heading Section */}
        <div data-aos="zoom-in" className="flex items-center justify-center gap-2.5 mb-5">
          <motion.img
            src={rotatinglens}
            alt="lens"
            className="w-6 h-6 md:w-8 md:h-8 brightness-0 "
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "backInOut", repeatDelay: 1, repeatType: "loop" }}
          />
          <h2 className="text-[16px] font-bold uppercase text-black text-center">Projects</h2>
        </div>

        {/* 2. Title Section */}
        <div data-aos="zoom-in" className="w-full mb-10 md:mb-20">
          <h1 className="text-[48px] md:text-[80px] lg:text-[190px] leading-none font-normal uppercase tracking-wider text-black text-center">
            Work
          </h1>
        </div>

        {/* 3. Cards Area - Yahan data pass ho raha hai */}
        <div className="mt-7.5 md:mt-15 lg:mt-20 w-full">
          <WorkList displayData={homeProjects} />
        </div>

        {/* 4. View More Button */}
        <div className="flex justify-center mt-10 md:mt-20">
            <Button 
                text="View all Projects" 
                showDot={true} 
                to="/projects" 
                className="bg-white text-black font-medium border-[#949494] hover:bg-black hover:text-white"
            />
        </div>
      </div>
    </section>
  )
}

export default ProjectsWork