import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Button from '../components/Button';
import LetsCapture from '../components/LetsCapture'; // LetsCapture Component

// Images
import MissionImg from '../assets/Images/woman.webp';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Intersection Observer for Counters
  const { ref: counterRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* --- SECTION 1: HERO (Lens Life) --- */}
      <section className="w-full min-h-[80vh] flex items-center justify-center pt-30 pb-15">
        <div className="max-w-430 w-full mx-auto px-5 md:px-10 lg:px-20 text-center">
          <h1 
            data-aos="fade-up"
            className="text-[50px] md:text-[100px] lg:text-[160px] font-normal leading-none tracking-tighter uppercase text-black"
          >
            LENS <span className="text-gray-400 font-light ">LIFE</span>
          </h1>
          
          <p 
            data-aos="fade-up" data-aos-delay="200"
            className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-black font-normal leading-relaxed opacity-80"
          >
            We create visually stunning photography and videography, capturing every moment with creativity and precision.
          </p>

          <div 
            data-aos="fade-up" data-aos-delay="400"
            className="flex flex-wrap justify-center gap-5 mt-12"
          >
            <Button 
                text="OUR SERVICES" 
                showDot={true} 
                to="/services" 
                className="bg-black text-white font-medium border-[#949494] hover:bg-white hover:text-black"
            />
            <Button 
                text="CONTACT NOW" 
                showDot={true} 
                to="/contact" 
                className="bg-white text-black font-medium border-black hover:bg-black hover:text-white"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: OUR JOURNEY (Counters) --- */}
      <section className="w-full py-20 bg-[#fbfbfb]">
        <div className="max-w-430 w-full mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" className="relative group">
            <div className="absolute -top-5 -left-5 w-20 h-20 border-t-2 border-l-2 border-black transition-all group-hover:top-0 group-hover:left-0" />
            <img 
              src={MissionImg} 
              alt="Our Story" 
              className="w-full h-137.5 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl"
            />
          </div>
          
          <div data-aos="fade-left" ref={counterRef}>
            <h2 className="text-4xl md:text-6xl font-normal uppercase tracking-tighter mb-8 text-black">
              Capturing Dreams <br /> Since 2015
            </h2>
            <p className="text-gray-700 text-lg mb-10 leading-relaxed font-light">
              Flicc started with a simple vision: to bridge the gap between imagination and reality. We believe every brand has a soul that deserves to be seen in high definition.
            </p>
            
            <div className="grid grid-cols-2 gap-12 mt-10 border-t border-gray-200 pt-10">
              <div>
                <h3 className="text-5xl md:text-6xl font-bold text-black tracking-tighter">
                  {inView ? <CountUp end={500} duration={3} suffix="+" /> : "0"}
                </h3>
                <p className="text-xs uppercase tracking-[4px] text-gray-500 mt-2 font-bold">Projects Done</p>
              </div>
              <div>
                <h3 className="text-5xl md:text-6xl font-bold text-black tracking-tighter">
                  {inView ? <CountUp end={120} duration={3} suffix="+" /> : "0"}
                </h3>
                <p className="text-xs uppercase tracking-[4px] text-gray-500 mt-2 font-bold">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE EDGE (Glossy Animated Cards) --- */}
      <section className="w-full py-24">
        <div className="max-w-430 w-full mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-5xl md:text-8xl font-normal uppercase text-black tracking-tighter">The Flicc Edge</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Turnaround", desc: "Edited photos delivered in 7 days or less. Fast and efficient." },
              { title: "High-End Gear", desc: "Using the latest technology for sharp, cinematic results." },
              { title: "Creative Vision", desc: "Unique perspectives that make you stand out from the crowd." }
            ].map((item, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="p-12 border border-gray-100 bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-black transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-black transition-all duration-500" />
                <h3 className="text-2xl font-bold uppercase mb-6 text-black tracking-tight">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CALL TO ACTION (Rounded & Floating) --- */}
      <section className="w-full py-10 mb-20">
        <div className="max-w-430 w-full mx-auto px-5 md:px-10">
            <div 
                data-aos="zoom-in"
                className="w-full bg-black py-20 px-10 rounded-[40px] md:rounded-[80px] text-white text-center shadow-2xl overflow-hidden relative"
            >
                <h2 className="text-[35px] md:text-[80px] font-normal uppercase leading-[1.1] mb-12 tracking-tighter">
                    Ready to tell <br /> 
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>your story?</span>
                </h2>
                
                <div className="flex justify-center">
                    <Button 
                        text="GET IN TOUCH" 
                        showDot={true} 
                        to="/contact" 
                        className="bg-white text-black font-bold border-white hover:bg-transparent hover:text-white px-10 py-5"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 5: LET'S CAPTURE --- */}
      <LetsCapture />

    </div>
  );
};

export default About;