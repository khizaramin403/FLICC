import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Dotedmap from '../../assets/Images/dottedmap.webp';
import rotatinglens from "../../assets/Images/rotatinglens.svg";

const Testimonial = () => {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Screen size check taake mobile par animation off rahay
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animation values (sirf desktop ke liye calculate honge)
  const xLeft = useTransform(scrollYProgress, [0.3, 0.5], ["105%", "0%"]);
  const xRight = useTransform(scrollYProgress, [0.3, 0.5], ["-105%", "0%"]);

  const testimonials = [
    { id: 1, name: "ETHAN MILLER", role: "Product Manager", text: "The agency's process is seamless, highly professional, and easy to work with. Every stage of the project was handled with clear communication and attention to detail.", type: "dark" },
    { id: 2, name: "JAMES CARTER", role: "Product Manager", text: "Creative work, reliable and truly professional.", type: "light" },
    { id: 3, name: "OLIVIA BENNET", role: "Project Coordinator", text: "Fast, reliable, always delivering great quality!", type: "light" },
    { id: 4, name: "SOPHIA TURNER", role: "Marketing Specialist", text: "Working with the team was an excellent experience. They understood our needs quickly.", type: "dark" }
  ];

  return (
    <section 
      ref={containerRef}
      className="w-full bg-black relative overflow-hidden py-20 md:py-25 lg:py-37.5"
    >
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none bg-center bg-cover"
        style={{ backgroundImage: `url(${Dotedmap})` }}
      />

      <div className="w-full max-w-430 mx-auto px-4 md:px-8 lg:px-15 relative z-10">
        
        {/* Header */}
        <div data-aos="zoom-in" className="flex flex-col items-center mb-12 md:mb-24 relative z-50">
           <div className="flex items-center justify-center gap-2.5">
              <motion.img
                src={rotatinglens}
                alt="lens"
                className="w-5 h-5 md:w-8 md:h-8 invert"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "backInOut", repeatDelay: 1 }}
              />
              <h2 className="text-white text-[14px] md:text-[16px] font-bold uppercase tracking-[3px]">Testimonial</h2>
           </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative">
          {testimonials.map((item, index) => {
            
            // Logic: Agar desktop hai toh curtain effect, warna zero movement
            let motionStyle = {};
            if (isDesktop) {
              if (index === 0) motionStyle = { x: xLeft };
              if (index === 3) motionStyle = { x: xRight };
            }

            return (
              <motion.div
                key={item.id}
                style={motionStyle}
                // Small screen pe padding aur min-height kam kardi hai
                className={`p-6 sm:p-8 lg:p-10 rounded-[15px] sm:rounded-[20px] min-h-80 sm:min-h-100 lg:min-h-112.5 flex flex-col justify-between shadow-2xl relative z-10
                  ${item.type === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-black'}
                  ${index === 0 && isDesktop ? 'lg:z-40' : ''} 
                  ${index === 3 && isDesktop ? 'lg:z-30' : ''}
                `}
              >
                <div>
                  <div className="flex gap-1 mb-4 sm:mb-8">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-red-600 text-base sm:text-xl">★</span>
                    ))}
                  </div>
                  {/* Text size responsive: mobile pe chota, desktop pe bara */}
                  <p className="text-[15px] sm:text-[18px] lg:text-[20px] leading-normal sm:leading-[1.6] font-normal italic">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-10">
                   <div className="w-10 h-12 sm:w-12 rounded-full bg-gray-700 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${item.id}`} alt={item.name} className="grayscale" />
                   </div>
                   <div>
                      <h4 className="font-bold text-[12px] sm:text-sm uppercase tracking-wider">{item.name}</h4>
                      <p className="text-[10px] sm:text-xs opacity-50">{item.role}</p>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;