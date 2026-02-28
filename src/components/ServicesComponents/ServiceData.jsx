// src/data/ServiceData.js (ya jahan bhi aapne save ki hai)

import StudioImg from '../../assets/Images/card1.webp';
import BabyGirl1 from '../../assets/Images/babygirl1.jpg';
import laptop from '../../assets/Images/laptop.webp';
import Glassitem from '../../assets/Images/glassitem.webp';
import Backward from '../../assets/Images/backword.webp';
import Ligtengirl from '../../assets/Images/fedgirl(1).webp';

export const allServices = [
  {
    title: "STUDIO SESSIONS",
    image: StudioImg,
    tags: ["Routine", "Experienced", "Creative room"],
    desc: "Professional, well-lit studio sessions designed to create polished portraits.",
    link: "/studioSession",
    bgColor: "bg-[#121212]"
  },
  {
    title: "FAMILY MOMENTS",
    image: BabyGirl1,
    tags: ["Way of life", "Qualified", "Lab"],
    desc: "Heartfelt, high-quality photographs that capture genuine emotions.",
    link: "/FamilyMoment",
    bgColor: "bg-[#121212]"
  },
  {
    title: "PRODUCT SHOTS",
    image: laptop,
    tags: ["Daily life", "Trained", "Workspace"],
    desc: "Clean, high-resolution product images tailored for e-commerce.",
    link: "/productshot",
    bgColor: "bg-[#121212]"
  },
  {
    title: "BRAND VISUALS",
    image: Glassitem,
    tags: ["Culture", "Skills", "Atelier"],
    desc: "High-impact imagery designed to elevate brand identity.",
    link: "/brand-visuals",
    bgColor: "bg-[#121212]"
  },
  {
    title: "EVENT CAPTURES",
    image: Backward,
    tags: ["Living", "Expert", "Workshop"],
    desc: "High-impact imagery designed to elevate brand identity.",
    link: "/event-captures",
    bgColor: "bg-[#121212]"
  },
  {
    title: "PORTRAIT SHOTS",
    image: Ligtengirl,
    tags: ["Professional", "Skills", "Studio"],
    desc: "Professional portrait photography capturing your personality with natural, confident, and timeless images.",
    link: "/portrait-shots",
    bgColor: "bg-[#121212]"
  }
  
];