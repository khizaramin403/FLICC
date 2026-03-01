



import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudioMainImg from '../../assets/Images/two.jpg'; 

const FamilyMoment = () => {
  const navigate = useNavigate();

  return (
    /* Responsive Padding: 
       Small: px-4 (16px), Medium: px-8 (32px), Large: px-[60px] 
       1720px ke baad margin auto (max-w) taake center rahe */
    <div className="bg-white min-h-screen pt-24 pb-20 overflow-x-hidden">
      <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-[60px]">
        
        {/* 1. Header Section */}
        <div data-aos="zoom-in" className="text-center mb-16 lg:mb-24">
          <h1 className="text-[36px] md:text-[80px] lg:text-[128px] font-medium text-black leading-[40px] md:leading-[141px] uppercase tracking-wider mb-8 ">
            Family<br className="md:hidden" /> Moments
          </h1>
          <p className="max-w-3xl mx-auto text-[#1a1a1a] text-[14px] md:text-[16px] leading-[24px] font-normal">
            A controlled space for creative exploration and bold expression. Where lighting, backdrop, and vision unite to create powerful, intentional, and striking imagery.
          </p>
        </div>

        {/* 2. Hero Image - 880px Height */}
        <div data-aos="zoom-in"
          onClick={() => navigate('/services')}
          className="group relative overflow-hidden rounded-[15px] md:rounded-[30px] cursor-pointer shadow-2xl mb-20 lg:mb-20"
        >
          <div className="w-full h-[500px] md:h-[700px] lg:h-[880px] overflow-hidden">
             <img 
               src={StudioMainImg} 
               alt="Studio Session"
               className="w-full h-full object-cover transition-all duration-[1.5s] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-110 group-hover:rotate-1"
             />
          </div>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
            <div className="transform translate-y-10 group-hover:translate-y-0 scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <div className="px-10 py-4 bg-white text-black font-bold rounded-full uppercase tracking-[4px] text-xs md:text-sm">
                Explore All Services
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Content Sections (Based on your Screenshots) */}
        <div className="space-y-20 lg:space-y-32 max-w-[1200px]">
          
          {/* Section 01: Studio Sessions */}
          <div data-aos="fade-right" className="space-y-6 mb-8">
            <h2 className="text-[32px] md:text-[48px] font-medium uppercase tracking-tight text-black">Studio Sessions</h2>
            <p className="text-[#1a1a1a] text-[16px] md:text-[16px] leading-[24px] font-normal opacity-90 text-justify md:text-left">
              Studio Sessions offer the ultimate controlled environment to create portraits of pure artistry and focus. Utilizing a versatile array of professional lighting, customizable backdrops, and precision equipment, this setting allows for complete creative freedom. The style eliminates variables, ensuring that all attention is directed toward the subject's expression, form, and unique character. Perfect for achieving a polished, commercial look or for crafting deeply personal and conceptual art, the studio is a blank canvas for your vision. The result is a fresh, modern aesthetic that emphasizes positivity and approachability, making it ideal for personal branding, fashion, and editorial work.
            </p>
          </div>

          {/* Section 02: Classic Portraiture */}
          <div data-aos="fade-right" className="space-y-6 mb-8">
            <h2 className="text-[32px] md:text-[48px] font-medium uppercase tracking-tight text-black">Classic Portraiture</h2>
            <p className="text-[#1a1a1a] text-[16px] md:text-[16px] leading-[24px] font-normal opacity-90 text-justify md:text-left">
              Classic Portraiture in the studio focuses on timeless elegance and technical perfection. Using soft, sculpting light and a neutral backdrop, this style creates a clean, powerful focus on the subject. Every detail from the pose to the expression is carefully crafted to convey grace, confidence, and sophistication. Perfect for executive headshots, professional profiles, or traditional family portraits, these images are designed to endure changing trends.
            </p>
          </div>

          {/* Section 03: High-Key & Airy */}
          <div data-aos="fade-right" className="space-y-6 pb-10">
            <h2 className="text-[32px] md:text-[48px] font-medium uppercase tracking-tight text-black ">High-Key & Airy</h2>
            <p className="text-[#1a1a1a] text-[16px] md:text-[16px] leading-[24px] font-normal opacity-90 text-justify md:text-left">
              High-Key & Airy sessions are designed to create images that feel bright, joyful, and utterly uplifting. By flooding the studio with clean, even light against white or light backdrops, we eliminate heavy shadows and create a soft, ethereal glow. This style is particularly effective for lifestyle photography, branding, and minimalist portraits. The result is a fresh, modern aesthetic that emphasizes positivity and approachability, making it ideal for personal branding, fashion, and editorial work.
              
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FamilyMoment;