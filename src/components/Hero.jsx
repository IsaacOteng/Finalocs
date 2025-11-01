import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="w-full h-139 md:h-220 sm:h-280 lg:h-240  bg-yellow-600 flex items-start justify-center sm:pt-16 md:pt-20 lg:pt-24">
                <div className="w-full navbar-placeholder flex items-center justify-between absolute top-0 left-0 px-4 sm:px-8 md:px-12">
                    <img
                        className="w-30 h-23 lg:ml-7 ml-3 lg:mr-0 -mb-2 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 my-auto"
                        src="./src/assets/logo_uni.svg"
                        alt="Logo"
                    />
                    <div className="mr-0 sm:mr-10 md:mr-20 flex flex-row items-center space-x-2 sm:space-x-6 md:space-x-8 lg:space-x-10">
                        <nav className="hidden sm:block -mb-10">
                            <ul className="flex flex-row space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 text-black font-serif text-xs sm:text-sm md:text-base lg:text-lg">
                                <li className="hover:text-gray-200 cursor-pointer">HOME</li>
                                <li className="hover:text-gray-200 cursor-pointer">ABOUT</li>
                                <li className="hover:text-gray-200 cursor-pointer">SERVICES</li>
                            </ul>
                        </nav>
                        <button>
                            <span className="flex justify-center px-3 py-2 mb-2 mr-3 lg:-mb-2 lg:mr-3 sm:px-4 sm:py-2 bg-white text-black font-serif text-xs sm:text-sm md:text-base hover:text-white transition-all duration-700 ease-in-out hover:bg-black cursor-pointer">Book Appointment</span>
                        </button>
                    </div>
                </div>

                {/* Card */}
                <div className="relative mt-20 sm:mt-10 w-[92%] sm:w-[90%] md:w-[90%] lg:w-[88%] h-[69%] sm:h-[60%] md:h-[85%] lg:h-[77%] xl:h-[85%] bg-white shadow-lg flex flex-col md:flex-row transition-all duration-300 overflow-hidden">                    {/* Left: Text */}
                    <div className="relative flex-1 p-6 mt-5 sm:p-10 md:p-20 z-20 ">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-serif font-bold leading-10 md:leading-17 lg:leading-18 sm:leading-14">
                            LOCS THAT<br /> ELEVATE YOUR <br /> BEAUTY & <br /> CONFIDENCE
                        </h1>

                        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-light">
                            At Fina's Locs, we create flawless, lightweight, and long-lasting locs that fit your <br />
                            lifestyle. Whether it's SisterLocs, MicroLocs, or InterLocs, your hair deserves the best.
                        </p>

                        <button className="mt-6 px-5 py-3 bg-yellow-600 text-white font-serif text-sm sm:text-base md:text-lg hover:bg-yellow-700 cursor-pointer">
                            View our Pricing
                        </button>
                    </div>

                    {/* Right: Image with gradient fade to white */}
                    <div className="absolute -right-7 top-10 flex-1 md:flex-none w-10/10 md:w-2/2 lg:w-6/9 flex items-center justify-center">
                        <div className="relative w-full h-auto min-h-[260px] sm:min-h-[820px] md:min-h-[600px] lg:min-h-[600px]">
                            <img
                                className="w-full h-full object-contain md:object-cover"
                                src="./src/assets/smile2.png"
                                alt="Locs With A Smile"
                            />
                        <div className="absolute inset-y-0 w-7/11 bg-gradient-to-r from-white/100 via-white/80 top-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section />
        </>
    )
}

export default Hero
