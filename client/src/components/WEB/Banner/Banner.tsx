import React from 'react';
import Search from '../common/searchbar/Search';


const Banner: React.FC = () => {
    return (
        <section className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden bg-primary bg-[url('/images/city.png')] bg-cover bg-bottom bg-no-repeat">

            {/* Tailwind v4 Overlay using arbitrary values and mix-blend */}
            <div className="absolute inset-0 z-0 bg-primary mix-blend-multiply" />
            <div className="absolute inset-0 z-[1] bg-linear-to-t from-primary via-primary/80 to-primary/90" />

            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">

                {/* Sub-heading */}
                <h4 className="text-white/90 text-lg md:text-2xl font-jakarta-medium mb-3 tracking-[0.15em] capitalize drop-shadow-sm">
                    Bangladesh’s Favorite Online
                </h4>

                {/* Main Heading */}
                <h1 className="text-white text-6xl md:text-9xl font-jakarta-Extrabold mb-10 leading-tight tracking-tighter drop-shadow-xl">
                    Fashion <span className="opacity-90 ">Mall</span>
                </h1>

                {/* Search Bar Container */}
                <Search />
            </div>

            {/* v4 specific utility for top light effect */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
        </section>
    );
};

export default Banner;