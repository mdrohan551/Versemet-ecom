import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Theme_button from '../../../Theme/Theme_button';


const BackTotop: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [scrollProgress, setScrollProgress] = useState<number>(0);

    useEffect(() => {
        const onScroll = () => {
            // স্ক্রল কতটুকু হয়েছে তা চেক করা
            setIsScrolled(window.scrollY > 200);
            
         
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div className="fixed bottom-8 right-6 z-100 flex flex-col items-center gap-3">
            {/* Main Floating Container */}
            <div
                className={`flex flex-col items-center justify-between overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] 
                bg-white dark:bg-black backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm
                ${isScrolled ? "h-28 py-2 rounded-full w-12" : "h-12 py-2 rounded-full w-12"}`}
            >
                {/* Theme Toggle Button */}
                <Theme_button
                    user={false}
                    className="p-2 rounded-full hover:bg-white/20 text-primary transition-all duration-300 active:scale-90"
                />

                {/* Back to Top Button with Progress Ring */}
                {isScrolled && (
                    <button
                        onClick={scrollToTop}
                        className="relative flex items-center justify-center w-10 h-10 transition-all duration-500 animate-in zoom-in group"
                    >
                        {/* Progress SVG */}
                        <svg className="absolute w-full h-full transform -rotate-90">
                            <circle
                                cx="20"
                                cy="20"
                                r="18"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="transparent"
                                className="text-white/10"
                            />
                            <circle
                                cx="20"
                                cy="20"
                                r="18"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="transparent"
                                strokeDasharray={113.1}
                                strokeDashoffset={113.1 - (113.1 * scrollProgress) / 100}
                                className="text-primary transition-all duration-150"
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Arrow Icon */}
                        <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition-transform">
                            <FaArrowUp size={12} />
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
};

export default BackTotop;