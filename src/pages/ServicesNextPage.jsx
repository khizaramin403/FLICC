import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Back jane ke liye navigation
import rotatinglens from "../assets/Images/rotatinglens.svg";
import ServicesList from '../components/ServicesComponents/ServicesList';
import { allServices } from '../components/ServicesComponents/ServiceData';
import Button from '../components/Button';

const ServicesNextPage = () => {
  const navigate = useNavigate();

  // Yahan hum 5th index se aage ka sara data utha rahe hain
  const remainingServices = allServices.slice(5);

  return (
    <section className="w-full bg-white flex justify-center py-14 md:py-20 lg:py-37.5 overflow-hidden">
      <div className="w-full max-w-430 px-4 md:px-8 lg:px-15">
        
        {/* Header - Same style as first page */}
        <div data-aos="zoom-in" className="flex items-center justify-center gap-2.5 mb-5">
          <motion.img
            src={rotatinglens}
            alt="lens"
            className="w-6 h-6 md:w-8 md:h-8 brightness-0 "
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
          <h2 className="text-[16px] font-bold uppercase text-black text-center">More Services</h2>
        </div>

        <div data-aos="zoom-in" className="w-full mb-10 md:mb-20">
          <h1 className="text-[48px] md:text-[80px] lg:text-[190px] leading-none font-normal uppercase tracking-wider text-black text-center">
            Services
          </h1>
        </div>

        {/* 3. Cards Area - Yahan sirf remainingServices jayengi */}
        <div className="mt-7.5 md:mt-15 lg:mt-20 w-full">
          {remainingServices.length > 0 ? (
            <ServicesList displayData={remainingServices} />
          ) : (
            <p className="text-center text-gray-500">No more services to show.</p>
          )}
        </div>

        {/* 4. Previous Page Button */}
        {/* 4. View More Button */}
        <div className="flex justify-center mt-10 md:mt-20">
            <Button 
                text="Previous Page" 
                showDot={true} 
                to="/services" // Jahan aap bhejnah chahen
                className="bg-black text-white  font-medium border-[#949494] hover:bg-white hover:text-black"
            />
        </div>
      </div>
    </section>
  )
}

export default ServicesNextPage