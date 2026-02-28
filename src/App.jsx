import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import Prices from './pages/Prices';
import BlogsDetail from './pages/BlogsDetail';
import ServicesDetails from './pages/ServicesDetails';
import Changelog from './pages/Changelog';
import License from './pages/License';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import LearnMore from './pages/LearnMore';
import StudioSession from './components/HomeSections/StudioSession';
import FamilyMoment from './components/HomeSections/FamilyMoment';
import ProductsShot from './components/HomeSections/ProductsShot';
import BrandVisual from './components/HomeSections/BrandVisual';
import ServicesNextPage from './pages/ServicesNextPage';
import EventCaptures from './components/ServicesComponents/EventCaptures';
import PortraitShots from './components/ServicesComponents/PortraitShots';
import VisualTales from './components/WorkComponent/VisualTales';
import EarthEscapes from './components/WorkComponent/EarthEscapes';
import UrbanMoods from './components/WorkComponent/UrbanMoods';
import StudioVibes from './components/WorkComponent/StudioVibes';
import WorkNextPage from './pages/WorkNextPage';




const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation ki speed (ms mein)
      once: false,     // Kya animation sirf ek baar ho?
      offset: 30,    // Kitne distance par animation trigger ho
    });
  }, []);

  const router = createBrowserRouter([
    
    {
      
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '',
          element: <Home/>
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: 'projects',
          element: <Projects/>
        },
        {
          path: 'services',
          element: <Services/>
        },
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: 'portfolio',
          element: <Portfolio/>
        },
        {
          path: "blogs",
          element: <Blogs/>
        },
        {
          path: "prices",
          element: <Prices/>
        },
        {
          path: "blog-details",
          element: <BlogsDetail/>
        },
        {
          path: "Service-details",
          element: <ServicesDetails/>
        },
        {
          path: "license",
          element: <License/>
        },
        {
          path: "changelog",
          element: <Changelog/>
        },
        {
          path: "learn-more",
          element: <LearnMore/>
        },
        {
          path: "studioSession",
          element: <StudioSession/>
        },
        {
          path: "familymoment",
          element: <FamilyMoment/>
        },
        {
          path: "productshot",
          element: <ProductsShot/>

        },
        {
          path: "brand-visuals",
          element: <BrandVisual/>
        },
      {
        path: "services-next-page",
        element: <ServicesNextPage/>
      },
      {
        path: "event-captures",
        element: <EventCaptures/>
      },
      {
        path: "portrait-shots",
        element: <PortraitShots/>
      },
      {
        path: "visual-tales",
        element: <VisualTales/>
      }, 
      {
        path: "earthscapes",
        element: <EarthEscapes/>
      }, 
      {
        path: "urban-moods",
        element: <UrbanMoods/>
      },
      {
        path: "studio-vibes",
        element: <StudioVibes/>
      },
      {
        path: "work-next-page",
        element: <WorkNextPage/>
      }
        
      ]
        
    }
  ]);

  return (
    <div>
      {/* <h1>this is app jsx</h1> */}

      <RouterProvider router={router}/>
    </div>
  )
}

export default App