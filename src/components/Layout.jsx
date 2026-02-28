import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import BackToTop from './BackToTop'
import WhatsAppIcon from './WhatsAppIcon'
import ScrollToTop from '../components/ScrollToTop';

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
        <Navbar/>
        <Outlet/>
        <Footer/>
        <WhatsAppIcon/>
          <BackToTop/>
        
    </div>
  )
}

export default Layout