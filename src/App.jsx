import React from 'react'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import Prices from './components/Prices'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <Hero />
    <div>
    <AboutUs />
    <OurServices />
    <Prices />
    <CallToAction />
    </div>
    <Footer />
    </>

  )
}

export default App