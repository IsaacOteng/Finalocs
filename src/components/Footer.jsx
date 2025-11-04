import React from "react";
import { Box, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <>
        <footer className="bg-[#180904] text-white pt-55 -mt-40 
                            
                            md:pt-70 md:pb-10
                            lg:pt-70 lg:pb-20
                            xl:pt-70 xl:pb-20
                            ">
        {/* Logo Divider */}
        <div className="flex items-center justify-center mb-6 xl:mb-20 lg:mb-20 md:mb-20">
            <div className="w-[100%] border-t border-gray-500"></div>
            <img
            src="/src/assets/finaicon.png"
            alt="Locs Logo"
            className="w-20 h-20 mx-10 object-contain"
            />
            <div className="w-[100%] border-t border-gray-500"></div>
        </div>

        {/* Footer Content */}
        <div className="text-sm px-3 flex flex-col 
                        sm:text-base sm:px-10
                        md:flex-row md:flex-wrap md:px-20 md:gap-20 md:pl-30
                        lg:flex-row lg:flex-nowrap lg:px-20 lg:gap-20 lg:pl-30
                        xl:flex-row xl:flex-nowrap xl:px-20 xl:gap-20 xl:pl-30

        ">
            <div className="mb-6 md:w-2/5 lg:w-[54%]  xl:w-1/3">
                <h3 className="text-xl font-serif mb-5 flex items-center gap-2
                                md:text-2xl md:whitespace-nowrap
                                lg:text-2xl lg:whitespace-nowrap
                                xl:text-3xl
                                ">
                    Quick Links
                    <span className="w-8 border-t border-white mt-1"></span>
                </h3>

                <div className="flex flex-row mb-5">
                    <h1 className="w-6 border-t-2 border-white"></h1>
                    <h1 className="w-15 ml-4 border-t-2 border-white"></h1>
                </div>


                <ul className="text-base font-serif 
                                md:text-lg md:mt-5 
                                lg:text-lg lg:mt-5 
                                xl:text-lg xl:mt-5
                                ">
                    <li className="mb-5"> 
                        <a href="#about" className="hover:text-[#b6722a] hover:ml-2 hover:duration-1000 ease-in-out transition-all">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:text-[#b6722a] hover:ml-2 hover:duration-1000 ease-in-out transition-all">
                            Services
                        </a>
                    </li>
                </ul>
            </div>

            <div className="xl:w-1/3 lg:w-[30%] md:w-1/3">
                <h3 className="text-xl font-serif mb-5 flex items-center gap-2
                                md:text-2xl
                                lg:text-2xl
                                xl:text-3xl
                                ">
                    Contact Us
                    <span className="w-8 border-t border-white mt-1"></span>
                </h3>
                <div className="flex flex-row mb-5">
                    <h1 className="w-6 border-t-2 border-white"></h1>
                    <h1 className="w-15 ml-4 border-t-2 border-white"></h1>
                </div>


                <div className="w-full flex flex-col">
                    <div className="items-start gap-2 text-white mb-7">
                        
                        <span className="text-base text-gray-500 inline
                                        md:block md:text-lg md:mb-2
                                        lg:block lg:text-lg lg:mb-2
                                        xl:block xl:text-lg xl:mb-2
                                        ">
                            <MapPin className="text-[#b6722a] w-4 h-4 -mt-1 mr-1 inline
                                                xl:mr-2
                                                md:mr-2
                                                lg:mr-2
                                                " /> 
                        Address </span>
                        <p className="-mt-0.5 font-serif text-lg inline 
                                                md:text-xl md:leading-9 md:whitespace-nowrap
                                                lg:text-xl lg:leading-9 lg:whitespace-nowrap
                                                xl:text-xl xl:leading-9
                        ">91 Dalston Ln, London E8 2NG, <br /> United Kingdom</p>
                    </div>


                    <div className="items-start gap-2 text-white mb-7">
                        <span className="text-base text-gray-500 
                                        md:block md:text-lg
                                        lg:block lg:text-lg
                                        xl:block xl:text-lg
                                        ">
                            <Phone className="text-[#b6722a] w-4 h-4 -mt-1 mr-1 inline
                                                xl:mr-2
                                                " /> 
                        Phone Number </span>
                        <p className="-mt-0.5 font-serif text-lg hover:ml-2 hover:duration-700 ease-in-out transition-all
                                        lg:inline lg:text-xl
                                        xl:inline xl:text-xl
                        "><a href="#whatsapp_link">+44 7308 289515</a></p>
                    </div>
                    <div className="items-start gap-2 text-white mb-7">
                        <span className="text-base text-gray-500 
                                        md:block md:text-lg
                                        lg:block lg:text-lg
                                        xl:block xl:text-lg
                                        ">
                            <Mail className="text-[#b6722a] w-4 h-4 -mt-1 mr-1 inline
                                                xl:mr-2
                                                md:mr-2
                                                lg:mr-2
                                                " /> 
                        Email </span>
                        <p className="-mt-0.5 font-serif text-lg hover:ml-2 hover:duration-700 ease-in-out transition-all
                                        md:inline md:text-lg
                                        lg:inline lg:text-lg
                                        xl:inline xl:text-lg
                        "><a href="#email">hello@finalocs.com</a></p>
                    </div>
                </div>
            </div>

            <div className="xl:w-1/3 lg:w-[48%]  md:w-full">
                    <h3 className="text-xl font-serif mb-5 flex items-center gap-2 whitespace-nowrap
                                    md:text-2xl 
                                    lg:text-2xl 
                                    xl:text-3xl">
                        Working Hours
                        <span className="w-8 border-t border-white mt-1"></span>
                    </h3>
                    <div className="flex flex-row mb-5">
                        <h1 className="w-6 border-t-2 border-white"></h1>
                        <h1 className="w-15 ml-4 border-t-2 border-white"></h1>
                    </div>
                    <div className="items-start gap-2 text-white mb-3">
                        <span className="text-base text-gray-500 mr-2">Monday - Saturday:</span>
                        <p className="-mt-0.5 font-serif text-lg inline
                                    md:block md:mt-3 md:text-2xl
                                    lg:block lg:mt-3 lg:text-2xl
                                    xl:block xl:mt-3 xl:text-2xl
                                    ">9am - 7pm</p>
                    </div>
                    <div className="items-start gap-2 text-white mb-20">
                        <span className="text-base text-gray-500">Emergency Bookings:</span>
                        <p className="-mt-0.5 font-serif text-lg inline
                                        md:block md:mt-2 md:text-xl
                                        lg:block lg:mt-2 lg:text-xl
                                        xl:block xl:mt-2 xl:text-xl
                                        "> (outside of working hours) will incur an additional cost</p>
                    </div>
            </div>
        </div>
        
        </footer>
        <div className="text-center text-white bg-[#200c09e9] text-sm p-5
                        md:text-left md:pl-30 md:text-lg
                        lg:text-left lg:pl-30 lg:text-lg
                        xl:text-left xl:pl-30 xl:text-lg

                            ">
            ©Fina Locs UK {new Date().getFullYear()} | All Rights Reserved
        </div>
        </>
    );
    };

    export default Footer;
