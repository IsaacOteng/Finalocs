import React from 'react'
import { ArrowRight } from 'lucide-react';


const AboutUs = () => {
  return (
    <>
    <section className='m-4 mx-4 mt-5
                        md:mx-9.5 md:mt-15
                        lg:mx-11.5 lg:mt-15
                        xl:mx-14.5 xl:mt-15
                        '>
      <div className='flex flex-col 
                      md:flex-col
                      lg:flex-row
                      xl:flex-row
                      '>                          
          <div className="mt-20 mb-14 flex flex-col items-center justify-center
                          md:items-start md:w-[100%] md:mb-0
                          lg:items-start lg:w-[50%]
                          xl:items-start xl:w-[50%]
                          ">
            <img
              className="z-10 w-full 
                        md:h-full md:w-[50%]
                        lg:h-58 lg:w-58
                        xl:h-70 xl:w-72
                        "
              src="./src/assets/man1.png"
              alt=""
            />
            <img
              className="z-20 w-1/2 -mt-10
                        sm:w-1/2
                        md:h-full md:w-[50%] md:-mt-50 md:ml-75
                        lg:h-58 lg:w-58 lg:-mt-20 lg:ml-40
                        xl:h-65 xl:w-65 xl:-mt-38 xl:ml-54
                      "
              src="./src/assets/hero_woman.png"
              alt=""
            />
          </div>
          <div className='flex flex-col items-start
                          md:w-[100%] md:mt-10
                          lg:w-[50%] lg:mt-25 
                          xl:w-[50%] xl:mt-25
                          '>
              <h2 className="text-2xl font-serif font-light mb-2 text-yellow-700">About Us</h2>
              <h1 className='text-4xl font-serif mb-5 
                            md:text-5xl
                            lg:text-5xl
                            xl:text-5xl
                            '>
                Your Hair, Our Passion</h1>
              <p className='text-sm text-gray-500 mb-2 leading-7
                            md:text-lg
                            lg:text-lg
                            xl:text-lg
                '>With years of expertise in loc artistry, Fina’s Locs is more than just a salon. It’s a space where
                  culture, creativity, and confidence come together. Every loc style we craft is designed to last, feel lightweight, and elevate your beauty.
              </p>
              <div className='flex mb-10 w-full'>
                  <img 
                  className='z-20 mt-2 w-20 h-20'
                  src="./src/assets/finaicon.png" 
                  alt="" />
                  <p className='z-10 text-base font-light mt-2 -ml-10 pl-12 pt-5 p-8 bg-pink-50 leading-7 md:w-[70%] xl:w-[75%] '>Our expert team offers personalized services that  enhance the beauty and health of your locs
                  </p>
              </div>
              <div className='md:flex md:flex-row md:gap-8
                              lg:flex lg:flex-row lg:gap-8
                              xl:flex xl:flex-row xl:gap-8
                            '>
                  <button
                      className="flex items-center mb-10 gap-3 bg-yellow-500 text-black font-serif text-lg px-7 py-4 
                              hover:text-white hover:bg-black transition-all duration-1000 ease-in-out cursor-pointer">
                      <span>Book Appointment</span>
                      <ArrowRight className="w-5 h-5" />
                  </button>
                  <div className='flex flex-col'>
                      <h6 className='text-gray-500 mb-1'>Need help?</h6>
                      <p className='text-lg font-bold font-serif'>+233 247 898 773</p>
                  </div>
              </div>
          </div>
      </div>

    </section>
    </>
  )
}

export default AboutUs



































{/* <div className="w-full h-auto bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-8 md:px-12 lg:px-16"> 
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-center"> 
          About Us
        </h2>
        <p className="max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl font-light text-center">
          At Fina's Locs, we are passionate about creating beautiful, lightweight, and long-lasting locs that enhance your
          natural beauty and boost your confidence. Our 
          expert stylists specialize in a variety of loc styles, including SisterLocs, MicroLocs, and InterLocs, 
          ensuring that we can cater to your unique preferences and lifestyle. We 
          believe that every individual deserves to feel empowered through their hair, and we are committed to providing exceptional
          service and quality craftsmanship. Join us on a journey to elevate your look with locs that truly reflect your personality and style.
        </p>
      </div>   */}