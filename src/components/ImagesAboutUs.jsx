import React, { useState } from "react";
import { motion } from "framer-motion";
import InViewAnimation from "../hooks/InViewAnimation";

const ImagesAboutUs = () => {
    const [ref, isVisible] = InViewAnimation(1, true); // One ref to trigger both
    const [loaded, setLoaded] = useState({ man: false, woman: false });

    return (
        <>
        {/* FIRST IMAGE - left to right */}
        <div ref={ref} className="relative overflow-hidden w-full">
            <img
            src="./src/assets/man1.png"
            alt="Man"
            onLoad={() => setLoaded((prev) => ({ ...prev, man: true }))}
            className="block w-full md:h-full md:w-[50%] object-cover"
            />

            <motion.div
            initial={{ x: 0 }}
            animate={
                loaded.man && isVisible ? { x: "100%" } : { x: 0 }
            }
            transition={{ duration: 4.0, ease: "easeOut" }}
            className="absolute top-0 left-0 h-full w-full bg-white pointer-events-none z-20"
            />
        </div>

        {/* SECOND IMAGE - top to bottom */}
        <div
            className="relative overflow-hidden
                    z-20 w-1/2 -mt-10
                    sm:w-1/2
                    md:h-full md:w-[50%] md:-mt-50 md:ml-75
                    lg:h-58 lg:w-58 lg:-mt-20 lg:ml-40
                    xl:h-65 xl:w-65 xl:-mt-38 xl:ml-54"
        >
            <img
            src="./src/assets/hero_woman.png"
            alt="Woman"
            onLoad={() => setLoaded((prev) => ({ ...prev, woman: true }))}
            className="block w-full h-full object-cover"
            />

            <motion.div
            initial={{ y: 0 }}
            animate={
                loaded.woman && isVisible ? { y: "100%" } : { y: 0 }
            }
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute top-0 left-0 h-full w-full bg-white pointer-events-none z-20 "
            />
        </div>
    </>
);
};

export default ImagesAboutUs;
