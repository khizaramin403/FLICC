import ServiceCard from './ServiceCard';
import StudioImg from '../../assets/Images/card1.webp';
// import BabyGirl from '../../assets/Images/babygirl.webp';
import BabyGirl1 from '../../assets/Images/babygirl1.jpg';
import laptop from '../../assets/Images/laptop.webp';
import Glassitem from '../../assets/Images/glassitem.webp';
import Button from '../Button';

// Swiper imports (Make sure ye installed hain)
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';






const ServicesCardSec = () => {
  const servicesData = [
    {
      title: "STUDIO SESSIONS",
      image: StudioImg,
      tags: ["Routine", "Experienced", "Creative room"],
      desc: "Professional, well-lit studio sessions designed to create polished, timeless portraits with creative directions and refined detail",
      link: "/studioSession",
      bgColor: "bg-[#121212]" // <--- Naya color add kiya

    },
    {
      title: "FAMILY MOMENTS",
      image: BabyGirl1,
      tags: ["Way of life", "Qualified", "Lab"],
      desc: "Heartfelt, high-quality photographs that capture genuine emotions.",
      link: "/FamilyMoment",
      bgColor: "bg-[#121212]" // <--- Naya color add kiya
    },
    {
      title: "PRODUCT SHOTS",
      image: laptop,
      tags: ["Daily life", "Trained", "Workspace"],
      desc: "Clean, high-resolution product images tailored for e-commerce, marketing campaigns, and visual storytelling.",
      link: "/productshot",
      bgColor: "bg-[#121212]" // <--- Naya color add kiya
    },
     {
      title: "BRAND VISUALS",
      image: Glassitem,
      tags: ["Culture", "Skills", "Atelier"],
      desc: "High-impact imagery designed to elevate brand identity, drive engagement, and increase conversions ",
      link: "/brand-visuals",
      bgColor: "bg-[#121212]" // <--- Naya color add kiya
    }
    
  ];

  return (
    <div>
      <section className="bg-transparent w-full">

    {/* 1. MOBILE ONLY (Small Screen): Swiper active hoga */}
      <div className="md:hidden pb-10 ">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          // Pagination ko 'progressbar' set kiya hai
    pagination={{ 
      type: 'progressbar',
      clickable: true 
    }}
          className="services-swiper  pb-6! "
        >
          {servicesData.map((item, index) => (
            <SwiperSlide key={index}>
              <ServiceCard {...item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. MEDIUM & LARGE SCREEN: Mapping logic */}
      {/* md:grid-cols-2 (Medium par 2 cards), lg:grid-cols-1 (Large par original line layout) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-0 max-w-350 mx-auto">
        {servicesData.map((item, index) => (
          <ServiceCard key={index} {...item} />
        ))}
      </div>

    </section>
    <Button
    showDot={true}
    to="/services"
     className="bg-black text-white border-[#949494] font-medium  hover:bg-white hover:text-black hover:border-[#949494] mt-6 md:mt-10 lg:mt-20 mx-auto "
    text="View All Services"/>
    </div>
    
  );
};

export default ServicesCardSec;







