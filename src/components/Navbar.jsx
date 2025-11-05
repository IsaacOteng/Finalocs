import React, { useEffect, useState } from "react";
import { TextAlignJustify } from "lucide-react";


const Navbar = ({
    initialBg = 'bg-yellow-600',
    scrolledBg = 'bg-black',
    initialText = 'text-black',
    scrolledText = 'text-white',
    scrolledShadow = 'shadow-lg',
    trigger = 330,


}) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > trigger) setScrolled(true);
            else setScrolled(false);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [trigger]);

    const containerClasses = `fixed top-0 left-0 w-full z-50 ${scrolledBg} ${scrolledShadow} transition-all duration-700 ease-out`;



    const linkTextClass = scrolled ? scrolledText : initialText;
    const iconColor = scrolled ? (scrolledText.includes('white') ? 'white' : 'black') : (initialText.includes('white') ? '#000000' : '#FFFFFF');

    return (
        <>
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-out ${scrolled ? `${scrolledBg} ${scrolledShadow}` : initialBg}`}
            style={{
                transform: scrolled ? "translateY(0)" : "translateY(-100%)",
                opacity: scrolled ? 1 : 0,
            }}>        
            <div className="w-full flex items-center justify-between pr-5 py-4 
                            sm:px-0 
                            md:pl-10 
                            lg:pl-10 
                            xl:pl-15">
                {/* Logo */}
                <img
                    className="w-35 h-20 my-auto ml-8 
                                sm:w-35 sm:h-25 sm:ml-10
                                md:w-38 md:h-28 md:ml-3 
                                lg:w-38 lg:h-20 lg:ml-7 lg:mr-0 
                                xl:w-38 xl:h-20 xl:ml-10"
                    src="./src/assets/logo_uni.svg"
                    alt="Logo"
                />

                {/* Nav Items + Button */}
                <div className="mr-0 flex flex-row items-center 
                                sm:mr-10 
                                md:mr-12 
                                lg:mr-15 
                                xl:mr-19">
                    {/* Desktop Nav Links */}
                    <nav className="hidden xl:block xl:mr-8">
                        <ul className={`flex flex-row space-x-2 font-serif text-xs 
                                        sm:space-x-4 sm:text-sm 
                                        md:space-x-6 md:text-base 
                                        lg:space-x-8 lg:text-lg 
                                        xl:space-x-3 xl:text-sm 
                                        ${linkTextClass}`}>
                            <li className="hover:opacity-80 cursor-pointer">HOME</li>
                            <li className="hover:opacity-80 cursor-pointer">ABOUT US</li>
                            <li className="hover:opacity-80 cursor-pointer">SERVICES</li>
                        </ul>
                    </nav>

                    {/* Book Appointment Button */}
                    <button>
                        <span className="hidden justify-center bg-white text-black font-serif text-xs transition-all duration-700 ease-in-out cursor-pointer 
                            sm:px-4 sm:py-2 sm:text-sm sm:mr-10 sm:hidden 
                            md:text-base md:mr-10 md:block 
                            lg:mr-12 lg:py-3 px-13 lg:block 
                            xl:mb-0 xl:mr-0 xl:py-4 xl:px-11 xl:block 
                            hover:text-white hover:bg-black
                            ">
                            Book Appointment
                        </span>
                    </button>

                    {/* Mobile Menu Icon */}
                    <div className="block 
                                    sm:block 
                                    md:block 
                                    lg:block 
                                    xl:hidden">
                        <TextAlignJustify color={iconColor} size={25} />
                    </div>
                </div>
            </div>
        </nav>


        
        <nav className=" bg-yellow-600 aria-hidden={false}">
            <div className="w-full flex items-center justify-between pr-5 py-4 
                            sm:px-0 
                            md:pl-10 
                            lg:pl-10 
                            xl:pl-15">
                {/* Logo */}
                <img
                    className="w-35 h-20 my-auto ml-8 
                                sm:w-35 sm:h-25 sm:ml-10
                                md:w-38 md:h-28 md:ml-3 
                                lg:w-38 lg:h-20 lg:ml-7 lg:mr-0 
                                xl:w-38 xl:h-20 xl:ml-10"
                    src="./src/assets/logo_uni.svg"
                    alt="Logo"
                />

                {/* Nav Items + Button */}
                <div className="mr-0 flex flex-row items-center 
                                sm:mr-10 
                                md:mr-12 
                                lg:mr-15 
                                xl:mr-19">
                    {/* Desktop Nav Links */}
                    <nav className="hidden xl:block xl:mr-8">
                        <ul className="flex flex-row space-x-2 font-serif text-xs 
                                        sm:space-x-4 sm:text-sm 
                                        md:space-x-6 md:text-base 
                                        lg:space-x-8 lg:text-lg 
                                        xl:space-x-3 xl:text-sm 
                                        ">
                            <li className="hover:opacity-80 cursor-pointer">HOME</li>
                            <li className="hover:opacity-80 cursor-pointer">ABOUT US</li>
                            <li className="hover:opacity-80 cursor-pointer">SERVICES</li>
                        </ul>
                    </nav>

                    {/* Book Appointment Button */}
                    <button>
                        <span className="hidden justify-center bg-white text-black font-serif text-xs transition-all duration-700 ease-in-out cursor-pointer 
                            sm:px-4 sm:py-2 sm:text-sm sm:mr-10 sm:hidden 
                            md:text-base md:mr-10 md:block 
                            lg:mr-12 lg:py-3 px-13 lg:block 
                            xl:mb-0 xl:mr-0 xl:py-4 xl:px-11 xl:block 
                            hover:text-white hover:bg-black
                            ">
                            Book Appointment
                        </span>
                    </button>

                    {/* Mobile Menu Icon */}
                    <div className="block 
                                    sm:block 
                                    md:block 
                                    lg:block 
                                    xl:hidden">
                        <TextAlignJustify color={iconColor} size={25} />
                    </div>
                </div>
            </div>
        </nav>
        
        </>
    );
};

export default Navbar;
