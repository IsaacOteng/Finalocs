import React from 'react'
import Hero from './components/Hero'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import Prices from './components/Prices'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'



const App = () => {
  return (
    <>


    <div
        className="relative w-full min-h-screen bg-yellow-600 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url('./src/assets/hero_bg.png')",
          
        }}>
    <Navbar/>
    <Hero />  
    </div>

    <ScrollToTop/>
    <AboutUs />
    <OurServices />
    <Prices />
    <CallToAction />
    <Footer />









    <style jsx>{`
        @media (max-width: 767px) {
          div[style] {
            background-image: none !important;
          }
          }
    `}
    </style>
    </>

  )
}

export default App