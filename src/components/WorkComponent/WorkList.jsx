import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WorkCard from './WorkCard';
import { allWorkData } from './WorkData'; // Jahan aapne data rakha hai

const WorkList = ({ displayData }) => {
  // Agar displayData nahi bhej rahe toh allWorkData use karein
  const data = displayData || [];

  return (
    <div className="w-full">
      {/* Mobile Screen Slider */}
      <div className="md:hidden">
        <Swiper spaceBetween={20} slidesPerView={1}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <WorkCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop & Medium Grid (2 Columns as per Image) */}
      <div className="hidden md:grid md:grid-cols-2 gap-x-12 gap-y-16">
        {data.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WorkList;