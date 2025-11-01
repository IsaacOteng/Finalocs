import React from 'react'

const OurServices = () => {
    return (
        <>
        <section className='m-4 mx-5 mb-25'>
            <div className="mt-20 mb-14 flex flex-col items-center justify-center tracking-wider">
                <h2 className="text-2xl font-serif font-light mb-4  text-yellow-700">OUR SERVICES</h2>
                <h1 className="text-4xl font-serif text-center">Our Featured Services</h1>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto my-16">
                    <div className="border-8 border-pink-50 p-8 shadow-sm">
                        <p className="text-gray-500 text-lg mb-8">—— 01</p>
                        <img src="./src/assets/sisterlocs.png" alt="SisterLocs" className="w-[90%] h-45 object-cover mb-4 rounded-2xl" />
                        <h3 className="font-serif text-2xl mb-2">SisterLocs</h3>
                        <p className="text-gray-600 text-base leading-relaxed pb-7">
                        Lightweight, flawless, and effortlessly chic Fina’s Locs crafts SisterLocs that turn heads while keeping maintenance minimal.
                        Your crown, your confidence!
                        </p>
                    </div>

                    <div className="border-8 border-pink-50 p-8 shadow-sm">
                        <p className="text-gray-500 text-lg mb-8">—— 02</p>
                        <img src="./src/assets/microlocs.png" alt="microlocs"  className="w-[90%] h-45 object-cover mb-4 rounded-2xl" />
                        <h3 className="font-serif text-2xl mb-2">Microlocs</h3>
                        <p className="text-gray-600 text-base leading-relaxed pb-7">
                        Big beauty in small locs! At Fina’s Locs, we design MicroLocs that are neat, stylish, and made to last. Elevate your loc journey with us!
                        </p>
                    </div>

                    <div className="border-8 border-pink-50 p-8 shadow-sm">
                        <p className="text-gray-500 text-lg mb-8">—— 02</p>
                        <img src="./src/assets/interlocs.png" alt="interlocs"  className="w-[90%] h-45 object-cover mb-4 rounded-2xl" />
                        <h3 className="font-serif text-2xl mb-2">Interlocs</h3>
                        <p className="text-gray-600 text-base leading-relaxed pb-7">
                        Big beauty in small locs! At Fina’s Locs, we design MicroLocs that are neat, stylish, and made to last. Elevate your loc journey with us!
                        </p>
                    </div>


            </div>
        </section>
        </>
    )
}

export default OurServices