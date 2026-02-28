import React from 'react';
import { motion } from "framer-motion";

const WhyChooseCard = ({ data }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative w-full aspect-16/10 md:aspect-video rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700
        ${data.type === 'dark' ? 'bg-[#121212]' : 'bg-[#F9F9F9]'}
      `}
    >
      {/* Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={data.img} 
          alt={data.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        {/* Subtle Overlay for readability */}
        <div className={`absolute inset-0 ${data.type === 'dark' ? 'bg-black/20' : 'bg-transparent'}`} />
      </div>

      {/* Content Area */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
        <div className="transform transition-all duration-500 group-hover:-translate-y-2">
          <h3 className={`text-[28px] md:text-[42px] font-bold uppercase leading-tight mb-2 
            ${data.type === 'dark' ? 'text-white' : 'text-black'}
          `}>
            {data.title}
          </h3>
          
          <p className={`text-[14px] md:text-[18px] max-w-[80%] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100
            ${data.type === 'dark' ? 'text-gray-300' : 'text-gray-700'}
          `}>
            {data.desc}
          </p>
        </div>
      </div>

      {/* Modern Top Right Icon/Arrow (Optional) */}
      <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0
        ${data.type === 'dark' ? 'text-white border-white/20' : 'text-black border-black/10'}
      ">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45">
          <path d="M1 7.5H14M14 7.5L8 1.5M14 7.5L8 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
    </motion.div>
    
  );
};

export default WhyChooseCard;