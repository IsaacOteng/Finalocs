import React from "react";
import { Phone } from "lucide-react"; // you can use lucide icons

const CallToAction = () => {
    return (
        <section className="mx-4 flex justify-center items-centerbg-[#2b2320]">
        <div className="bg-[#b6722a] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]  overflow-hidden shadow-xl">
            {/* Image Section */}
            <div className="relative">
            <img
                src="./src/assets/threesmiles.png"
                alt="Three Smiles"
                className="w-full h-50 object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-white p-3 rounded-full shadow-md">
                <Phone className="text-[#b6722a] w-5 h-5" />
                </div>
            </div>
            </div>

            {/* Text Section */}
            <div className="bg-[#b6722a] text-white py-15 px-5">
            <h3 className="text-2xl text-center font-serif sm:text-xl mb-4">
                We Are Just A Call Away
            </h3>
            <p className="text-4xl text-center sm:text-3xl font-serif mb-10">
                +44 7308 289515
            </p>
            <button className="border border-white text-white ml-10 py-4 pr-12 pl-8 rounded-md hover:bg-white hover:text-[#b6722a] transition-all duration-300">
                Book Appointment
            </button>
            </div>
        </div>
        </section>
    );
    };

    export default CallToAction;
