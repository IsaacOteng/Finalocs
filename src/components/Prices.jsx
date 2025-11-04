import React from "react";

const Services = () => {
    return (
        <section className=" bg-pink-50 flex flex-col items-center mx-4 pb-20 px-3 sm:px-6">
        <div className="w-full max-w-[1100px]">

            <p className=" text-md font-serif tracking-widest text-yellow-600 mb-2">
            OUR SERVICES AND PRICES
            </p>
            <h2 className="text-4xl sm:text-3xl md:text-4xl font-serif text-[#3c2a1e] mb-10">
            Premium Loc Services, <br className="hidden sm:block" /> Designed For You
            </h2>

            {/* Table header */}
            <div className="grid grid-cols-[30%_50%_20%] font-serif text-[#3c2a1e] pb-3">
            <p className="">Service:</p>
            <p className="">Description:</p>
            <p className="">Pricing:</p>
            </div>

            <div className="w-full bg-white grid grid-cols-[30%_50%_20%] py-6  text-[#4b3b30] mb-5">
                <p className="font-serif text-sm m-auto ml-2
                                sm:text-base
                                md:text-base
                                xl:text-base
                                
                                ">Consultation</p>
                <p className="text-sm text-gray-500 leading-5">
                    Not sure where to start? Book a one-on-one consultation with our loc
                    expert to explore the best loc style for your hair type, lifestyle,
                    and desired look. Get expert advice on installation, maintenance, and
                    long-term care.
                </p>
                <p className="font-serif text-[#3c2a1e] m-auto">£20</p>
            </div>


            
            <div className="w-full bg-white py-3 text-[#4b3b30] mb-8">
                <p className="mx-2 font-serif text-[#3c2a1e] border-b-gray-400 border-b-1 leading-8">Starter Locs</p>
                <div className=" bg-white grid grid-cols-[30%_50%_20%] py-6 text-[#4b3b30] mb-2 ">
                    <p className="font-serif m-auto ml-2 text-sm whitespace-break-spaces
                                sm:text-base
                                md:text-base
                                xl:text-base
                    ">Comb coil full head</p>
                    <p className="text-sm text-gray-500 leading-5">
                        A perfect choice for beginners, comb coils create uniform, well-defined locs that mature beautifully over time. 
                        Ideal for those starting their loc journey with a clean, polished look.
                    </p>
                    <p className="font-serif text-[#3c2a1e] m-auto whitespace-break-spaces"><span className="font-serif text-xs text-gray-500">from <br /></span>£200</p>
                </div>
                <hr className="mx-3 border-gray-400"/>
                
                <div className="bg-white grid grid-cols-[30%_50%_20%] py-3 text-[#4b3b30] mb-2 whitespace-break-spaces">
                    <p className="font-serif m-auto ml-2">Sister Locs</p>
                    <p className="text-sm text-gray-500 leading-5">
                        Experience the elegance of ultra-small, lightweight, and versatile locs. Sister Locs offer a naturally flowing, refined aesthetic,
                        making them perfect for those who love intricate styles with easy maintenance.
                    </p>
                    <p className="font-serif text-[#3c2a1e] m-auto">£500</p>
                </div>
                <hr className="mx-3 border-gray-400"/>
                <div className=" bg-white grid grid-cols-[30%_50%_20%] py-3 text-[#4b3b30] mb-2 ">
                    <p className="font-serif m-auto ml-3">Micro Locs</p>
                    <p className="text-sm text-gray-500 leading-5">
                        Fine, flexible, and full of styling potential, Micro Locs are perfect for achieving a sleek, 
                        sophisticated look with a natural feel. Enjoy long-lasting beauty with minimal effort
                    </p>
                    <p className="font-serif text-[#3c2a1e] m-auto">£400</p>
                </div>
            </div>


            <div className="w-full bg-white py-3 text-[#4b3b30] mb-8">
                <p className="mx-3 font-serif text-[#3c2a1e] border-b-gray-400 border-b-1 leading-8">Hair Treatments</p>
                <div className=" bg-white grid grid-cols-[30%_50%_20%] py-3 text-[#4b3b30] mb-2 ">
                    <p className="font-serif m-auto ml-3">Acv (Detox)</p>
                    <p className="text-sm text-gray-500 leading-5">
                        Clarify and revitalize your scalp with our apple cider vinegar treatment.
                        Removes product buildup, balances pH, and leaves hair silky smooth.
                    </p>
                    <p className="font-serif text-[#3c2a1e] m-auto">£30</p>
                </div>
                <hr className="mx-3 border-gray-400"/>
                
                <div className=" bg-white grid grid-cols-[30%_50%_20%] py-3 text-[#4b3b30] mb-2 ">
                    <p className="font-serif m-auto ml-3">Hot oil</p>
                    <p className="text-sm text-gray-500 leading-5">
                        Deeply nourish dry, damaged hair with our intensive hot oil therapy. Restores moisture,
                        repairs split ends, and adds remarkable shine.
                    </p>
                    <p className="font-serif text-[#3c2a1e] m-auto">£30</p>
                </div>
            </div>
            <div className=" bg-white grid grid-cols-[30%_50%_20%] py-3 text-[#4b3b30] mb-8">
                <p className="font-serif m-auto ml-3">Hair colour</p>
                <p className="text-sm text-gray-500 leading-5">
                    Transform your look with our premium hair coloring service. Expert application,
                    vibrant results, and formulas that protect while they beautify.
                </p>
                <p className="font-serif text-[#3c2a1e] m-auto">£40</p>
            </div>
            <div className=" bg-white grid grid-cols-[30%_50%_20%] py-3 text-[#4b3b30] mb-8">
                <p className="font-serif m-auto ml-3">Black dye</p>
                <p className="text-sm text-gray-500 leading-5">
                    Achieve rich, dimensional darkness with our specialized black dye treatment.
                    Long-lasting color with exceptional depth and a healthy, glossy finish.
                </p>
                <p className="font-serif text-[#3c2a1e] m-auto">£40</p>
            </div>


            <div className="w-full bg-white py-3 text-[#4b3b30] mb-8">
                <p className="mx-3 font-serif text-[#3c2a1e] border-b-gray-400 border-b-1 leading-8">Interlock</p>
                <div className=" bg-white grid grid-cols-[30%_50%_20%] py-6 text-[#4b3b30] mb-2 ">
                    <p className="font-serif m-auto ml-3">Full head</p>
                    <p className="text-sm text-gray-500 leading-5">
                        Complete transformation with precision interlocking technique. Secures and maintains 
                        locs while promoting healthy growth and clean, defined roots.
                    </p>
                    <p className="font-serif text-[#3c2a1e] m-auto">£80<span className="font-serif text-xs text-gray-500"> Style</span></p>
                </div>
                <hr className="mx-3 border-gray-400"/>
                
                <div className=" bg-white grid grid-cols-[30%_50%_20%] py-3 text-[#4b3b30] mb-2 ">
                    <p className="font-serif m-auto ml-3">Half head</p>
                    <p className="text-sm text-gray-500 leading-5">
                        Refresh your roots with our partial interlocking service. Maintains the integrity 
                        of your locs while addressing new growth for a polished appearance.
                    </p>
                    <p className="font-serif text-[#3c2a1e] m-auto">£70<span className="font-serif text-xs text-gray-500"> Style</span></p>
                </div>
                <hr className="mx-3 border-gray-400"/>
                <div className=" bg-white grid grid-cols-[30%_50%_20%] py-3 text-[#4b3b30] mb-2 ">
                    <p className="font-serif m-auto ml-3">Sister Locs</p>
                    <p className="text-sm text-gray-500 leading-5">
                        Interlock for sister Locs NB: overgrown more than six weeks will be extra charges
                    </p>
                    <p className="font-serif text-[#3c2a1e] m-auto">£150<span className="font-serif text-xs text-gray-500"> Style</span></p>                    
                </div>
                <hr className="mx-3 border-gray-400"/>
                
                <div className=" bg-white grid grid-cols-[30%_50%_20%] py-3 text-[#4b3b30] mb-8 ">
                    <p className="font-serif m-auto ml-3">Micro Locs</p>
                    <p className="text-sm text-gray-500 leading-5">
                        Interlock for Micro locs NB: overgrown more than six weeks will be extra charges
                    </p>
                    <p className="font-serif text-[#3c2a1e] m-auto">£130<span className="font-serif text-xs text-gray-500"> Style</span></p>
                </div>             
            </div>
            <div className="w-full bg-white py-3 text-[#4b3b30] mb-2">
                <p className="mx-3 font-serif text-[#3c2a1e] border-b-gray-400 border-b-1 leading-8">Retwist</p>
                <div className=" bg-white grid grid-cols-[30%_50%_20%] py-6 text-[#4b3b30] mb-2 ">
                    <p className="font-serif m-auto ml-3">Full head</p>
                    <p className="text-sm text-gray-500 leading-5">
                        Revitalize your locs with our complete retwist service. Tightens from root to tip,
                        reduces frizz, and creates a clean, polished appearance that lasts.
                    </p>
                    <p className="font-serif text-[#3c2a1e] m-auto">£70<span className="font-serif text-xs text-gray-500"> Style</span></p>                    
                </div>
                <hr className="mx-3 border-gray-400"/>

                <div className=" bg-white grid grid-cols-[30%_50%_20%] py-3 text-[#4b3b30] ">
                    <p className="font-serif m-auto ml-3">Half head</p>
                    <p className="text-sm text-gray-500 leading-5">
                        Targeted retwist focusing on your most visible sections. Perfect for maintaining your look 
                        between full appointments while preserving the health of your locs.
                    </p>
                    <p className="font-serif text-[#3c2a1e] m-auto">£60<span className="font-serif text-xs text-gray-500"> Style</span></p>
                </div>
            </div>





            {/* Section Title
            <h3 className="text-xl font-semibold text-[#3c2a1e] mt-10 mb-4">
            Starter Locs
            </h3>

            <div className="bg-[#fff1eb] grid grid-cols-[30%_50%_20%] py-6 px-3 border-b border-[#e2c7b8] text-[#4b3b30]">
            <p className="font-medium">Comb Coil Full Head</p>
            <p className="text-sm leading-relaxed">
                A perfect choice for beginners, comb coils create uniform,
                well-defined locs that mature beautifully over time. Ideal for those
                starting their loc journey with a clean, polished look.
            </p>
            <p className="font-semibold text-[#3c2a1e]">From £200</p>
            </div>

            <div className="bg-[#fff1eb] grid grid-cols-3 gap-4 py-6 px-3 border-b border-[#e2c7b8] text-[#4b3b30]">
            <p className="font-medium">Comb Coil Half Head</p>
            <p className="text-sm leading-relaxed">
                For those looking for a styled or selective loc look, a partial head
                of comb coils gives versatility while maintaining a lightweight,
                stylish feel.
            </p>
            <p className="font-semibold text-[#3c2a1e]">£150</p>
            </div>

            <div className="bg-[#fff1eb] grid grid-cols-3 gap-4 py-6 px-3 border-b border-[#e2c7b8] text-[#4b3b30]">
            <p className="font-medium">Sister Locs</p>
            <p className="text-sm leading-relaxed">
                Experience the elegance of ultra-small, lightweight, and versatile
                locs. Sister Locs offer a naturally flowing refined aesthetic ideal
                for those who love intricate styles with easy maintenance.
            </p>
            <p className="font-semibold text-[#3c2a1e]">£500</p>
            </div>

            <div className="bg-[#fff1eb] grid grid-cols-3 gap-4 py-6 px-3 border-b border-[#e2c7b8] text-[#4b3b30]">
            <p className="font-medium">Micro Locs</p>
            <p className="text-sm leading-relaxed">
                Fine, flexible, and full of styling potential. Micro Locs are perfect
                for achieving a sleek, sophisticated look with long-lasting beauty
                and minimal effort.
            </p>
            <p className="font-semibold text-[#3c2a1e]">£400</p>
            </div>

            {/* Hair Treatments *
            <h3 className="text-xl font-semibold text-[#3c2a1e] mt-10 mb-4">
            Hair Treatments
            </h3>

            <div className="bg-[#fff1eb] grid grid-cols-3 gap-4 py-6 px-3 border-b border-[#e2c7b8] text-[#4b3b30]">
            <p className="font-medium">Acy (Detox)</p>
            <p className="text-sm leading-relaxed">
                Clarify and revitalize your scalp with our apple cider detox
                treatment. Removes product buildup, balances pH, and leaves hair silky
                smooth.
            </p>
            <p className="font-semibold text-[#3c2a1e]">£30</p>
            </div>

            <div className="bg-[#fff1eb] grid grid-cols-3 gap-4 py-6 px-3 border-b border-[#e2c7b8] text-[#4b3b30]">
            <p className="font-medium">Hot Oil</p>
            <p className="text-sm leading-relaxed">
                Deeply nourish and strengthen hair with our intensive hot oil
                therapy. Restores moisture, repairs split ends, and adds remarkable
                shine.
            </p>
            <p className="font-semibold text-[#3c2a1e]">£30</p>
            </div>

            {/* Hair Colour *
            <h3 className="text-xl font-semibold text-[#3c2a1e] mt-10 mb-4">
            Hair Colour
            </h3>

            <div className="bg-[#fff1eb] grid grid-cols-3 gap-4 py-6 px-3 border-b border-[#e2c7b8] text-[#4b3b30]">
            <p className="font-medium">Hair Colour</p>
            <p className="text-sm leading-relaxed">
                Transform your look with our premium hair coloring services. Expert
                application, vibrant results, and formulas that protect while they
                beautify.
            </p>
            <p className="font-semibold text-[#3c2a1e]">£40</p>
            </div>

            <div className="bg-[#fff1eb] grid grid-cols-3 gap-4 py-6 px-3 text-[#4b3b30]">
            <p className="font-medium">Black Dye</p>
            <p className="text-sm leading-relaxed">
                Achieve rich, dimensional darkness with our specialized black dye
                treatment. Long-lasting color with exceptional depth and a healthy,
                glossy finish.
            </p>
            <p className="font-semibold text-[#3c2a1e]">£40</p>
            </div> */}
        </div>
        </section>
    );
    };

    export default Services;
