import React from 'react';
import { Link } from 'react-router-dom';

const StickerBanner: React.FC = () => {
    return (
        <section className="w-full px-4 py-6 md:py-10 bg-white">
            <Link
                to="/category/health-beauty"
                className="block container mx-auto overflow-hidden rounded-xl md:rounded-3xl shadow transition-all duration-500 group"
            >
                <div className="relative w-full aspect-[21/9] md:aspect-[4/1]">
                    <img
                        src="/images/StickerImg.jpg"
                        alt="Authentic Skin & Body Care Cosmetics"
                        className="w-full h-full object-cover md:object-fill transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    {/* Overlay for subtle interaction effect */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                </div>
            </Link>
        </section>
    );
};

export default StickerBanner;