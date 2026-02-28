// src/components/ServicesComponents/ServicesList.jsx
import React from 'react';
import ServiceCard from '../HomeSections/ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ServicesList = ({ displayData, showPagination = true }) => { 
  
  // Ye check blank screen ko rokega
  if (!displayData || !Array.isArray(displayData)) {
    return <div className="text-center py-10">Loading services...</div>;
  }
  
  // Yahan hum prop receive kar rahe hain
  return (
    <div className="w-full">
      <section className="bg-transparent w-full">
        <div className="md:hidden pb-10">
          <Swiper modules={[Pagination]} spaceBetween={20} slidesPerView={1} pagination={showPagination ? { type: 'progressbar' } : false}>
            {displayData.map((item, index) => (
              <SwiperSlide key={index}><ServiceCard {...item} /></SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-1 gap-6 max-w-430 mx-auto">
          {displayData.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesList;