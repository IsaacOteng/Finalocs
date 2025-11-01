import React from "react";
import { Box, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#1a1412] text-white pt-44 -mt-30 sm:px-10">
        {/* Logo Divider */}
        <div className="flex items-center justify-center mb-6">
            <div className="w-[50%] border-t border-white"></div>
            <img
            src="/src/assets/finaicon.png"
            alt="Locs Logo"
            className="w-20 h-20 mx-10 object-contain"
            />
            <div className="w-[50%] border-t border-white"></div>
        </div>

        {/* Footer Content */}
        <div className="text-sm sm:text-base px-3">
            <div className="mb-6">
            <h3 className="text-xl font-serif mb-5 flex items-center gap-2">
                Quick Links
                <span className="w-8 border-t border-white mt-1"></span>
            </h3>

            <div className="flex flex-row mb-5">
                <h1 className="w-6 border-t-2 border-white"></h1>
                <h1 className="w-15 ml-4 border-t-2 border-white"></h1>
            </div>


            <ul className="text-base font-serif">
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

            <div>
                <h3 className="text-xl font-serif mb-5 flex items-center gap-2">
                    Contact Us
                    <span className="w-8 border-t border-white mt-1"></span>
                </h3>
                <div className="flex flex-row mb-5">
                    <h1 className="w-6 border-t-2 border-white"></h1>
                    <h1 className="w-15 ml-4 border-t-2 border-white"></h1>
                </div>


                <div className="w-full flex flex-col">
                    <div className="flex items-start gap-2 text-gray-300 mb-7">
                        <MapPin className="text-[#b6722a] w-4 h-4 mt-1" />
                        <span className="text-base text-gray-500">Address </span>
                        <p className="-mt-0.5 font-serif text-lg ">91 Dalston Ln, London E8 2NG, United Kingdom</p>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300 mb-7">
                        <Phone className="text-[#b6722a] w-4 h-4 mt-1" />
                        <span className="text-base text-gray-500">Phone Number </span>
                        <p className="-mt-0.5 font-serif text-lg hover:ml-2 hover:duration-700 ease-in-out transition-all "><a href="#whatsappnumber">+44 7308 289515</a></p>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300 mb-7">
                        <Mail className="text-[#b6722a] w-4 h-4 mt-1" />
                        <span className="text-base text-gray-500">Email</span>
                        <p className="-mt-0.5 font-serif text-lg hover:ml-2 hover:duration-700 ease-in-out transition-all "><a href="#email">hello@finalocs.com</a></p>
                    </div>
                </div>
            </div>

            <div>
                    <h3 className="text-xl font-serif mb-5 flex items-center gap-2">
                        Working Hours
                        <span className="w-8 border-t border-white mt-1"></span>
                    </h3>
                    <div className="flex flex-row mb-5">
                        <h1 className="w-6 border-t-2 border-white"></h1>
                        <h1 className="w-15 ml-4 border-t-2 border-white"></h1>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300 mb-3">
                        <span className="text-base text-gray-500">Monday - Saturday:</span>
                        <p className="-mt-0.5 font-serif text-lg">9am - 7pm</p>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300 mb-15">
                        <span className="text-base text-gray-500 whitespace-nowrap">Emergency Bookings:</span>
                        <p className="-mt-0.5 font-serif text-lg"> (outside of working hours) will incur an additional cost</p>
                    </div>
            </div>
        </div>
        <div className="text-center text-white bg-[#652a2418] text-base p-5">
            ©Fina Locs UK {new Date().getFullYear()} | All Rights Reserved
        </div>
        
        </footer>
    );
    };

    export default Footer;
