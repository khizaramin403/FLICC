import React from 'react'
import { motion } from "framer-motion";
import rotatinglens from "../assets/Images/rotatinglens.svg";
import ServicesList from '../components/ServicesComponents/ServicesList';
import Button from '../components/Button';
// 1. Sabse pehle apna data import karein
import { allServices } from '../components/ServicesComponents/ServiceData';


const Services = () => {

  // 2. Data ko slice karein (0 se lekar 5 tak)
  const firstFive = allServices.slice(0, 5);


  return (
    
     <section className="w-full bg-white flex justify-center py-14 md:py-20 lg:py-37.5 overflow-hidden">
      <div className="w-full max-w-430 px-4 md:px-8 lg:px-15">
        
        {/* 1. My Services Heading */}
        <div data-aos="zoom-in" className="flex items-center justify-center gap-2.5 mb-5">
          <motion.img
            src={rotatinglens}
            alt="lens"
            className="w-6 h-6 md:w-8 md:h-8 brightness-0 "
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "backInOut", repeatDelay: 1, repeatType: "loop" }}
          />
          <h2 className="text-[16px] font-bold uppercase text-black text-center">My Services</h2>
        </div>

        {/* 2. SERVICES Title */}
        <div data-aos="zoom-in" className="w-full mb-10 md:mb-20">
          <h1 className="text-[48px] md:text-[80px] lg:text-[190px] leading-none font-normal uppercase tracking-wider text-black text-center">
            Services
          </h1>
        </div>

        {/* 3. Cards Area (Mapping logic wala component) */}
        {/* 3. Cards Area - Ab hum slice kiya hua data bhej rahe hain */}
        <div className="mt-7.5 md:mt-15 lg:mt-20 w-full">
          <ServicesList displayData={firstFive} showPagination={false}/>
        </div>

        {/* 4. View More Button */}
        <div className="flex justify-center mt-10 md:mt-20">
            <Button 
                text="Next Page" 
                showDot={true} 
                to="/services-next-page" // Jahan aap bhejnah chahen
                className="bg-black text-white  font-medium border-[#949494] hover:bg-white hover:text-black"
            />
        </div>
      </div>
    </section>
    
  )
}

export default Services

