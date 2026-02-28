import React from "react";
import { motion } from "framer-motion";
import rotatinglens from "../../assets/Images/rotatinglens.svg";
import ServicesCardSec from "./ServicesCardSec";

const MyServices = () => {
  return (
    <section className="w-full bg-black flex justify-center py-14 md:py-20 lg:py-37.5 overflow-hidden">
      <div className="w-full max-w-430 px-4 md:px-8 lg:px-15">
        {/* 1. Top Heading Row (My Services with Rotating Icon) */}
        <div data-aos="zoom-in" className="flex items-center justify-center gap-2.5 mb-5">
          {" "}
          {/* gap 10px as requested */}
          <motion.img
            src={rotatinglens}
            alt="lens"
            className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert"
            // 1. Initial state set karein (Zaroori hai)
            initial={{ rotate: 0 }}
            // 2. Animate ko explicitly 360 karein
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "backInOut",
              repeatDelay: 1,
              // 3. RepeatType ko 'loop' set kar dein taake wo har dafa 0 se start ho
              repeatType: "loop",
            }}
          />
          <h2 className="text-[16px] font-bold leading-6 uppercase text-white text-center">
            My Services
          </h2>
        </div>

        {/* 2. Main Large Heading (SERVICES) */}
        {/* Gap between My Services and SERVICES is 20px (mb-5 on top row) */}
        <div data-aos="zoom-in" className="w-full">
          <h1
            className="
            text-[28px]          /* Small screen */
            md:text-[42px]        /* Medium screen */
            lg:text-[190px]       /* Large screen */
            leading-none          /* Strict line-height control */
            font-normal
            uppercase 
            tracking-wider
            text-white
            text-center
          "
          >
            Services
          </h1>
        </div>

        {/* --- 3. Content Area Placeholder --- */}
        {/* Yahan aap apna mazeed content (cards, list, etc.) dal sakte hain */}
        <div className="mt-7.5 md:mt-15 lg:mt-20 w-full">
          <ServicesCardSec />
        </div>
      </div>
    </section>
  );
};

export default MyServices;
