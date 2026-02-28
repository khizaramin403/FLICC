import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const imageVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: 0, y: 20 },
  animateOnHover: { 
    opacity: 1, scale: 0.9, rotate: 10, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const ServiceCard = ({ title, image, tags, desc, link, bgColor }) => {
  const navigate = useNavigate();

  return (
    <div className={`${bgColor} group rounded-[20px] lg:rounded-none  border-b-none lg:border-b border-white/30 hover:border-white/90 transition-all duration-500 h-full `}>
      <div 
        onClick={() => navigate(link)}
        className="flex flex-col lg:grid lg:grid-cols-[1fr_1fr_1.3fr] items-start lg:items-center  py-5 md:py-10 lg:py-12.5 px-5 cursor-pointer transition-all duration-500 hover:bg-white/2 relative h-full"
      >
        
        {/* LEFT: Title */}
        <div className="overflow-hidden z-10 w-full">
          <h2 className="text-[22px] md:text-[24px] lg:text-[64px] leading-tight lg:leading-[76.8px] font-medium text-white uppercase tracking-tight transition-all duration-500 group-hover:tracking-[2px] mb-6 lg:mb-0"> 
            <span className="lg:hidden">{title}</span>
            <span className="hidden lg:block">
              {title.split(' ').map((word, i) => (
                <React.Fragment key={i}>{word}<br/></React.Fragment>
              ))}
            </span>
          </h2>
        </div>

        {/* MIDDLE: Image Area (Replaced motion.div with simple div) */}
        <div className="relative h-auto md:h-62.5 lg:h-64 w-full flex justify-center items-center lg:overflow-visible md:mb-6 lg:mb-0">
          <div
            className={`
              /* Layout & Size */
              relative md:relative lg:absolute 
              w-full h-56 md:h-62.5 lg:w-97.5 lg:h-70.25 
              overflow-hidden rounded-[10px] pointer-events-none z-0 shadow-xl
              
              /* TRANSITION LOGIC */
              transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
              
              /* Mobile/Medium: Always Visible, No Animation */
              opacity-100 scale-100 rotate-0 translate-y-0
              
              /* Large Screen: Hidden by default, Animation on Group Hover */
              lg:opacity-0 lg:scale-80 lg:translate-y-5 lg:rotate-0
              lg:group-hover:opacity-100 lg:group-hover:scale-90 lg:group-hover:rotate-10 lg:group-hover:translate-y-0
            `}
          >
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* RIGHT: Content */}
       {/* RIGHT: Content */}
<div className="hidden md:flex flex-col gap-0 lg:gap-5 z-10 w-full">
  <div className="flex flex-wrap gap-2.5 mb-6 lg:mb-0">
    {tags.map((tag, index) => (
      <button 
        key={index} 
        /* Cursor pointer aur hover par color change ki classes add ki hain */
        className="px-4 py-1.5 lg:px-6 lg:py-2.5 border border-white/30 rounded-[5px] text-[12px] lg:text-[16px] font-semibold text-white bg-[#373737] cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
      >
        {tag}
      </button>
    ))}
  </div>
  
  <p className="text-[#c5c5c5] text-[14px] lg:text-[16px] leading-6 font-normal max-w-full lg:max-w-90 ">
    {desc}
  </p>

  <div className="flex justify-end">
    {/* Hidden on mobile, shows on desktop */}
    <div className="hidden lg:flex w-13 h-13 rounded-full border border-white/40 items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
      <svg 
        /* Jaise hi card (group) par hover hoga, arrow ghoom kar straight (0 degree) ho jayega */
        className="w-5 h-5 -rotate-45 transition-transform duration-500 group-hover:rotate-0" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default ServiceCard;