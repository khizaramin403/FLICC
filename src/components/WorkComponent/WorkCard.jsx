import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";

const WorkCard = ({ title, image, tags, link }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      onClick={() => navigate(link)}
      className="group cursor-pointer w-full mb-10 lg:mb-0"
      initial="initial"
      whileHover="hover"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg aspect-4/3 bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Floating Tags (Glossy) */}
        <div className="absolute top-6 left-6 flex gap-3">
          {tags?.map((tag, index) => (
            <motion.span
              key={index}
              variants={{
                initial: { opacity: 0, y: 10 },
                hover: { opacity: 1, y: 0 }
              }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full text-[14px] font-medium shadow-xl"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Title & Modern Arrow Button Area */}
      <div className="mt-6 flex justify-between items-end">
        <h3 className="text-[32px] md:text-[40px] font-normal uppercase tracking-tight text-black leading-none">
          {title}
        </h3>
        
        {/* Glossy Arrow Button */}
        <motion.div 
          className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/5 backdrop-blur-sm border border-black/10 text-black shadow-inner"
          variants={{
            initial: { rotate: 0, scale: 1 },
            hover: { 
              rotate: 45, // 90 degree rotate ke liye aap 90 bhi kar sakte hain
              scale: 1.1,
              backgroundColor: "rgba(0, 0, 0, 1)", // Hover pe black ho jayega
              color: "#ffffff" // Arrow white ho jayega
            }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <GoArrowUpRight className="text-2xl md:text-3xl" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WorkCard;