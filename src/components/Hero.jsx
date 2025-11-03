import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="w-full h-190 bg-yellow-600 flex items-start justify-center
                                sm:h-180 sm:pt-16
                                md:h-220 md:pt-20
                                lg:h-250 lg:pt-24
                                xl:h-234">
                <div className="w-full navbar-placeholder flex items-center justify-between absolute top-0 left-0 px-4 
                                sm:px-8
                                md:px-12">
                    <img
                        className=" w-37 h-25 my-auto ml-3 lg:mr-0 
                                    sm:w-20 sm:h-20 
                                    md:w-24 md:h-24 
                                    lg:w-28 lg:h-28 lg:ml-7"
                        src="./src/assets/logo_uni.svg"
                        alt="Logo"
                    />
                    <div className="mr-0 flex flex-row items-center space-x-2
                                    sm:mr-10 
                                    md:mr-20 sm:space-x-6 
                                    md:space-x-8 
                                    lg:space-x-10">
                        <nav className="hidden sm:block -mb-10">
                            <ul className=" flex flex-row space-x-2 text-black font-serif text-xs 
                                            sm:space-x-4 sm:text-sm
                                            md:space-x-6 md:text-base
                                            lg:space-x-8 lg:text-lg">
                                <li className="hover:text-gray-200 cursor-pointer">HOME</li>
                                <li className="hover:text-gray-200 cursor-pointer">ABOUT</li>
                                <li className="hover:text-gray-200 cursor-pointer">SERVICES</li>
                            </ul>
                        </nav>
                        <button>
                            <span className="flex justify-center px-3 py-2 mb-2 mr-3 bg-white text-black font-serif text-xs transition-all duration-700 ease-in-out cursor-pointer
                                            sm:px-4 sm:py-2 sm:text-sm 
                                            md:text-base
                                            lg:-mb-2 lg:mr-3 
                                            hover:text-white hover:bg-black
                                            ">Book Appointment</span>
                        </button>
                    </div>
                </div>

                {/* Card */}
                <div className="relative my-25 w-[92%] h-[80%] bg-white shadow-lg flex flex-col transition-all duration-300 overflow-hidden
                                sm:mt-10  sm:w-[90%] sm:h-[80%]
                                md:w-[90%]  md:h-[85%] md:flex-row
                                lg:w-[91%] lg:h-[87%] 
                                xl:w-[92%] xl:h-[88%] ">                   
                                
                    {/* Left: Text */}
                    <div className="relative flex-1 p-6 z-20
                                    sm:p-10 
                                    md:p-20
                                    lg:p-15
                                    xl:p-20">

                        <h1 className=" text-4xl font-serif font-bold leading-14 
                                        sm:text-5xl sm:leading-14
                                        md:text-6xl md:leading-17
                                        lg:text-7xl lg:leading-18 lg:mt-7 lg:mb-8
                                        xl:text-7xl xl:leading-20 xl:mt-10">
                            LOCS THAT<br /> ELEVATE YOUR <br /> BEAUTY & <br /> CONFIDENCE
                        </h1>

                        <p className="  mt-4 text-lg font-light
                                        sm:text-base 
                                        md:text-lg 
                                        lg:text-xl">
                            At Fina's Locs, we create flawless, lightweight, and long-lasting locs that fit your <br />
                            lifestyle. Whether it's SisterLocs, MicroLocs, or InterLocs, your hair deserves the best.
                        </p>

                        <button className="mt-12 px-5 py-3 bg-yellow-600 text-white font-serif text-sm hover:bg-yellow-700 cursor-pointer
                                            sm:text-base sm:mt-6
                                            md:text-lg md:mt-10
                                            lg:px-12 lg:py-4
                                            xl:px-14 xl:py-5 xl:mt-6">
                            View our Pricing
                        </button>
                    </div>

                    {/* Right: Image with gradient fade to white */}
                    <div className="absolute -right-7 top-10 flex-1 w-10/10 flex items-center justify-center
                                    sm:w-10/10 sm:h-10/10 sm:top-20 sm:left-10
                                    md:flex-none md:h-9/9 md:top-0 md:left-20
                                    lg:w-18/20 lg:h-3/3 lg:top-7 lg:left-50
                                    xl:w-12/20 xl:h-8/9 xl:top-15 xl:left-120">
                        <div className="relative w-full h-auto min-h-[260px] sm:min-h-[820px] md:min-h-[600px] lg:min-h-[600px]">
                            <img
                                className="invisible sm:invisible md:visible lg:visible xl:visible sm:w-full h-full object-contain md:object-cover  "
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
