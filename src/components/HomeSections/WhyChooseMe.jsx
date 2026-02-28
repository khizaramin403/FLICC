import React from 'react';
import { motion } from "framer-motion";
import rotatinglens from "../../assets/Images/rotatinglens.svg";
import WhyChooseCard from '../WhyChooseCard';
import img1 from "../../assets/Images/spark.webp";
import img2 from "../../assets/Images/wallet.webp";
import img3 from "../../assets/Images/Camera.webp";
// Maan lein 4th image ye hai
import img4 from "../../assets/Images/spark.webp"; 

const WhyChooseMe = () => {
  const chooseData = [
    { id: 1, title: "Turnaround Time", desc: "Edited photos delivered in 7 days or less", img: img1, type: "light" },
    { id: 2, title: "Flexible Pricing", desc: "Pricing that adapts to every project and budget.", img: img2, type: "dark" },
    { id: 3, title: "High-End Gear", desc: "Using the latest technology for best results.", img: img3, type: "light" },
    { id: 4, title: "Creative Edge", desc: "Unique perspectives that make you stand out.", img: img4, type: "light" },
  ];

  return (
    <>
    <section className="w-full bg-white flex justify-center py-14 md:py-20 lg:py-37.5 overflow-hidden">
      <div className="w-full max-w-430 px-4 md:px-8 lg:px-15">
        
        {/* 1. Header Logic */}
        <div data-aos="zoom-in" className="flex items-center justify-center gap-2.5 mb-5">
          <motion.img
            src={rotatinglens}
            alt="lens"
            className="w-6 h-6 md:w-8 md:h-8 brightness-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "backInOut", repeatDelay: 1 }}
          />
          <h2 className="text-[16px] font-bold uppercase text-black">Why Choose Me</h2>
        </div>

        {/* 2. Big Title */}
        <div data-aos="zoom-in" className="w-full mb-10 md:mb-20">
          <h1 className="text-[48px] md:text-[80px] lg:text-[190px] leading-none font-normal uppercase tracking-wider text-black text-center">
            Edge
          </h1>
        </div>

        {/* 3. Modern Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {chooseData.map((item) => (
            <WhyChooseCard key={item.id} data={item} />
          ))}
        </div>
      </div>
      
    </section>
    </>
  );
};

export default WhyChooseMe;