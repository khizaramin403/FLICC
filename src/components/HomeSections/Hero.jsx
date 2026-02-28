import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import camerapicture from "../../assets/Images/camerapicture.webp";

// Images Import
import topImg1 from "../../assets/Images/one.webp";
import topImg2 from "../../assets/Images/Two.webp";
import topImg3 from "../../assets/Images/Three.webp";
import topImg4 from "../../assets/Images/Four.webp";
import topImg5 from "../../assets/Images/Five.webp";

import botImg1 from "../../assets/Images/boy.png";
import botImg2 from "../../assets/Images/fedgirl(1).webp";
import botImg3 from "../../assets/Images/boycam.webp";
import botImg4 from "../../assets/Images/girl.webp";

const Hero = () => {
  const containerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const topSliderData = [
    {
      img: topImg1,
      label: "Model Shoot",
    },

    {
      img: topImg2,
      label: "Product Shoot",
    },

    {
      img: topImg3,
      label: "Commercial",
    },

    {
      img: topImg4,
      label: "Wedding",
    },

    {
      img: topImg5,
      label: "Cinematic",
    },
  ];

  const botSliderData = [
    {
      img: botImg1,
      label: "Drone Shoot",
    },
    {
      img: botImg2,
      label: "Portrait",
    },
    {
      img: botImg3,
      label: "Studio",
    },
    {
      img: botImg4,
      label: "Event",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/",
      color: "hover:bg-[#1877F2]",
    },

    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/khizar_balouch/",
      color: "hover:bg-[#E4405F]",
    },

    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/923086321448",
      color: "hover:bg-[#25D366]",
    },
  ];

  const combinedSliderData = [...topSliderData, ...botSliderData];

  return (
    <section
      ref={containerRef}
      className="pt-10 md:pt-12.5 pb-15 md:pb-25 overflow-hidden w-full bg-white selection:bg-black selection:text-white"
      onClick={() => setActiveImage(null)}
    >
      <div className="w-full max-w-480 mx-auto px-4 md:px-5">
        <div className="relative w-full">
          {/* CAMERA LENS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }} // Bilkul chota aur gayab
            whileInView={{ opacity: 1, scale: 1 }} // Asli size aur nazar ana
            viewport={{ once: false, amount: 0.3 }} // 30% nazar aane par chalay ga
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01], // Smooth premium feel ke liye easing
              scale: {
                type: "spring",
                damping: 12, // Is se halka sa bounce ayega
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="absolute top-[38%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-100 lg:z-20 pointer-events-none"
          >
            <motion.img
              style={{ rotate }}
              src={camerapicture}
              className="w-70 md:w-87.5 lg:w-74.5 lg:h-75 object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            />
          </motion.div>

          <div className="flex flex-col gap-5 w-full relative z-10">
            {/* 1. TOP LABEL */}
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.9 }} // 100px right se shuru, halka sa chota (0.9 scale) aur gayab
              whileInView={{ x: 0, opacity: 1, scale: 1 }} // Apni asli jagah par aye, poora scale (1) aur nazar aye
              viewport={{ once: false }} // Har bar scroll par animate hoga
              transition={{
                type: "spring",
                stiffness: 80, // Thora aur smooth banane ke liye stiffness kam ki hai
                damping: 15, // Bounce control karne ke liye
                duration: 0.8, // Animation ki raftaar
                delay: 0.1, // Halki si deri taake natural lage
              }}
              className="flex items-center justify-center lg:justify-start gap-2 text-[12px] md:text-[24px] leading-8.5 font-normal uppercase tracking-widest text-black"
            >
              <FaMapMarkerAlt className="text-lg md:text-3xl text-black" />
              <span className="hidden lg:inline   ">BASED IN BWP, PK</span>
              <span className="lg:hidden">BASED IN BWP, PK</span>
            </motion.div>

            {/* --- MOBILE & MEDIUM LAYOUT --- */}
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.9 }} // 100px right se shuru, halka sa chota (0.9 scale) aur gayab
              whileInView={{ x: 0, opacity: 1, scale: 1 }} // Apni asli jagah par aye, poora scale (1) aur nazar aye
              viewport={{ once: false }} // Har bar scroll par animate hoga
              transition={{
                type: "spring",
                stiffness: 80, // Thora aur smooth banane ke liye stiffness kam ki hai
                damping: 15, // Bounce control karne ke liye
                duration: 0.8, // Animation ki raftaar
                delay: 0.1, // Halki si deri taake natural lage
              }}
              className="lg:hidden flex flex-col items-center gap-6 md:gap-8"
            >
              <div className="flex items-center justify-center gap-3">
                <h1 className="text-[50px] md:text-[110px] font-normal tracking-normal uppercase text-black">
                  PIXEL
                </h1>
                <h2 className="text-[50px] md:text-[110px] font-normal tracking-normal uppercase text-black/50">
                  TALES
                </h2>
              </div>

              <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing">
                <motion.div
                  drag="x"
                  dragConstraints={{ left: -1500, right: 0 }}
                  animate={activeImage === null ? { x: [0, -1000] } : {}}
                  transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                  }}
                  className="flex gap-4"
                >
                  {[...combinedSliderData, ...combinedSliderData].map(
                    (item, i) => (
                      <div
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImage(activeImage === i ? null : i);
                        }}
                        className="relative group min-w-42.5 md:min-w-60 h-57.5 md:h-77.5 overflow-hidden rounded-xl shadow-md"
                      >
                        {/* Image Scale & Grayscale Animation */}
                        <img
                          src={item.img}
                          alt={item.label}
                          className={`w-full h-full object-cover transition-all duration-700 
                                    ${activeImage === i ? "grayscale-0 scale-110" : "grayscale"}`}
                        />

                        {/* Bottom Shadow & Text Animation (Like Large Screen) */}
                        <div
                          className={`absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 flex items-end p-5 
                                    ${activeImage === i ? "opacity-100" : "opacity-0"}`}
                        >
                          <motion.p
                            initial={{ y: 20 }}
                            animate={activeImage === i ? { y: 0 } : { y: 20 }}
                            className="text-white font-medium text-sm md:text-base tracking-widest uppercase"
                          >
                            {item.label}
                          </motion.p>
                        </div>
                      </div>
                    ),
                  )}
                </motion.div>
              </div>

              <div className="hidden md:flex flex-row gap-6 mt-2">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className={`w-14 h-14 border-2 border-black/5 rounded-2xl flex items-center justify-center text-xl text-black ${item.color} hover:text-white transition-all`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* --- DESKTOP LAYOUT (No Changes Here) --- */}
            <div className="hidden lg:flex flex-col gap-5">
              <motion.div
                initial={{ x: 100, opacity: 0, scale: 0.9 }} // 100px right se shuru, halka sa chota (0.9 scale) aur gayab
                whileInView={{ x: 0, opacity: 1, scale: 1 }} // Apni asli jagah par aye, poora scale (1) aur nazar aye
                viewport={{ once: false }} // Har bar scroll par animate hoga
                transition={{
                  type: "spring",
                  stiffness: 80, // Thora aur smooth banane ke liye stiffness kam ki hai
                  damping: 15, // Bounce control karne ke liye
                  duration: 0.8, // Animation ki raftaar
                  delay: 0.1, // Halki si deri taake natural lage
                }}
                className="flex items-center justify-between gap-10"
              >
                <h1 className="text-[300px] font-normal leading-[0.8] tracking-wide text-black uppercase">
                  PIXEL
                </h1>
                <div className="w-[35vw] overflow-hidden cursor-grab active:cursor-grabbing">
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: -1000, right: 0 }}
                    animate={{ x: [0, -800] }}
                    transition={{
                      repeat: Infinity,
                      duration: 25,
                      ease: "linear",
                    }}
                    className="flex gap-5"
                  >
                    {[...topSliderData, ...topSliderData].map((item, i) => (
                      <div
                        key={i}
                        className="relative group min-w-61.75 h-77.5 overflow-hidden rounded-xl shadow-lg"
                      >
                        <img
                          src={item.img}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-white font-medium uppercase tracking-widest">
                            {item.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0, scale: 0.9 }} // -100px (Left) se shuru hoga
                whileInView={{ x: 0, opacity: 1, scale: 1 }} // Apni asli jagah par ayega
                viewport={{ once: false }} // Har bar scroll par animate hoga
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="flex items-center justify-between gap-7.5 mt-5"
              >
                <div className="flex items-center gap-10 flex-1">
                  <div className="w-[30vw] overflow-hidden cursor-grab active:cursor-grabbing">
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: -1000, right: 0 }}
                      animate={{ x: [-800, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 25,
                        ease: "linear",
                      }}
                      className="flex gap-5"
                    >
                      {[...botSliderData, ...botSliderData].map((item, i) => (
                        <div
                          key={i}
                          className="relative group min-w-52.5 h-65 overflow-hidden rounded-xl shadow-md"
                        >
                          <img
                            src={item.img}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                            <span className="text-white text-xs border border-white/40 px-3 py-1 rounded-full uppercase">
                              {item.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                  <h2 className="text-[300px] font-normal leading-[0.8] tracking-tighter text-black/50 uppercase">
                    TALES
                  </h2>
                </div>

                <div className="flex flex-col gap-5 items-center">
                  {socialLinks.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className={`w-14 h-14 border-2 border-black/5 rounded-2xl flex items-center justify-center text-xl text-black ${item.color} hover:text-white transition-all`}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
