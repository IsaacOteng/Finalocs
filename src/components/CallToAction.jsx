import React from "react";
import { Phone } from "lucide-react"; // you can use lucide icons

const CallToAction = () => {
    return (
        <section className="mx-4 flex justify-center items-center
                            md:items-start
                            lg:items-start
                            ">
        <div className="bg-[#b6722a] w-[100%] shadow-xl 
                        sm:w-[80%] 
                        md:w-[100%]
                        lg:w-[100%]
                        xl:flex xl:flex-row
                        ">

            {/* Image Section */}
            <div className="relative">
                <img
                    src="./src/assets/threesmiles.png"
                    alt="Three Smiles"
                    className="w-full h-50 object-cover
                                md:h-100
                                lg:h-140
                                xl:w-[100%] xl:h-86"
                />
                <div className="absolute inset-0 flex justify-center items-center
                                xl:left-140
                                ">
                    <div className="bg-white p-3 rounded-full shadow-md">
                    <Phone className="text-[#b6722a] w-7 h-7
                                        md:w-10 md:h-10 md:p-2
                                        lg:w-10 lg:h-10 lg:p-2
                    " />
                    </div>
                </div>
            </div>

            {/* Text Section */}
            <div className="bg-[#b6722a] text-white py-10 px-5 text-left ml-6
                                sm:ml-24
                                md:py-27 md:px-5 md:ml-34
                                lg:py-20 lg:px-5 lg:ml-60
                                xl:ml-30 xl:h-0
                            ">
                    <h3 className="text-2xl mb-2 font-serif
                                    sm:text-xl
                                    md:text-3xl md:mb-0
                                    lg:text-3xl lg:mb-1
                                    ">
                        We Are Just A Call Away
                    </h3>
                    <p className="text-4xl mb-10 font-serif
                                    sm:text-3xl
                                    md:text-6xl 
                                    lg:text-6xl 
                    ">
                        +44 7308 289515
                    </p>
                <button className="border border-white text-white font-serif py-4 pr-12 pl-8 tracking-widest hover:bg-white hover:text-[#b6722a] transition-all duration-300
                                    md:py-4
                                    lg:py-5 lg:pr-15 lg:tracking-widest
                                    xl-py-4
                                    
                ">
                    BOOK APPOINTMENT
                </button>
            </div>
        </div>
        </section>
    );
    };

    export default CallToAction;
