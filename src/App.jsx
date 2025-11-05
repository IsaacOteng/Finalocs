import React from 'react'
import Hero from './components/Hero'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/navbar'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import Prices from './components/Prices'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
    <Navbar/>
    <Hero />  
    <ScrollToTop/>
    <AboutUs />
    <OurServices />
    <Prices />
    <CallToAction />
    <Footer />
    </>

  )
}

export default App