import React from 'react'
import Hero from '../components/HomeSections/Hero'
import AboutMe from '../components/HomeSections/AboutMe'
import AboutDetails from '../components/HomeSections/AboutDetails'
import MyServices from '../components/HomeSections/MyServices'
import ProjectsWork from '../components/HomeSections/ProjectsWork'
import Testimonial from '../components/HomeSections/Testimonial'
import WhyChooseMe from '../components/HomeSections/WhyChooseMe'
import LetsCapture from '../components/LetsCapture'

const Home = () => {
  return (
    <div>
      {/* <h1 className='text-center text-black font-bold'>This is <span className='text-amber-600 font-extrabold'>Home</span> Page</h1> */}
        <Hero/>
        <AboutMe/>
        <AboutDetails/>
        <MyServices/>
        <ProjectsWork/>
        <Testimonial/>
        <WhyChooseMe/>
        <LetsCapture/>
x    </div>
  )
}

export default Home