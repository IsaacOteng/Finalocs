import React, { useEffect, useRef } from "react";
import { Clock, Mail, MapPin, Phone, X } from "lucide-react";
import "../App.css";

const Sidebar = ({ menuOpen, setMenuOpen }) => {
    const sidebarRef = useRef(null);

    // Toggle body class (optional)
    useEffect(() => {
        document.body.classList.toggle("sidebar-open", menuOpen);
    }, [menuOpen]);

    // Prevent background scroll while cursor is over the sidebar
    useEffect(() => {
        const el = sidebarRef.current;
        if (!el) return;

        const handleWheel = (e) => {
        // prevent page scroll, allow sidebar scroll
        e.stopPropagation();
        e.preventDefault();
        el.scrollTop += e.deltaY;
        };

        el.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
        el.removeEventListener("wheel", handleWheel, { passive: false });
        };
    }, []);

    return (
        <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#1A1717] border-l-3 border-yellow-700 text-white z-50 transform transition-transform duration-500 ease-in-out overflow-y-auto hide-scrollbar ${
            menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-6">
            <img src="/src/assets/logo.svg" alt="Fina's Locs Logo" className="h-17 w-auto" />
            <button
            onClick={() => setMenuOpen(false)}
            className="bg-[#b1770ce6] p-3.5 rounded-full hover:bg-[#e0a632] transition-colors"
            >
            <X className="w-4 h-4 text-white" />
            </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2 px-6 pt-8 pb-4 text-lg font-serif tracking-wide">
            {["Home", "About Us", "Services"].map((item, idx) => (
            <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#C68B1E] transition-colors border-b border-white pb-2"
            >
                {item}
            </a>
            ))}
        </div>

        {/* Contact Info */}
        <div className="mt-auto border-t border-[#3b3b3b] px-6 pb-8">
            <h3 className="text-white mb-5 text-xl font-semibold font-serif tracking-tight">
            Contact Info
            </h3>
            <ul className="flex flex-col space-y-3 text-sm text-white">
            <li className="flex space-x-4">
                <MapPin width={20} height={35} className="my-auto" />
                <span className="text-base font-semibold hover:text-[#C68B1E] transition-colors">
                91 Dalston Ln, London E8 2NG, United Kingdom
                </span>
            </li>
            <li className="flex space-x-4">
                <Mail width={20} height={35} className="my-auto" />
                <span className="text-base font-semibold hover:text-[#C68B1E] transition-colors">
                hello@finalocs.com
                </span>
            </li>
            <li className="flex space-x-4">
                <Clock width={20} height={35} className="my-auto" />
                <span className="text-base font-semibold hover:text-[#C68B1E] transition-colors">
                Mon–Fri, 09am–05pm
                </span>
            </li>
            <li className="flex space-x-4">
                <Phone width={20} height={35} className="my-auto" />
                <span className="text-base font-semibold hover:text-[#C68B1E] transition-colors">
                +44 7308 289515
                </span>
            </li>
            </ul>
        </div>
        </div>
    );
};

export default Sidebar;
