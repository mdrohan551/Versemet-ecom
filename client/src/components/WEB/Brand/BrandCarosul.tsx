import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Brand {
    id: number;
    name: string;
    image: string;
}

interface BrandCarouselProps {
    brands: Brand[] | undefined;
    isLoading: boolean;
}

const BrandCarousel: React.FC<BrandCarouselProps> = ({ brands, isLoading }) => {
    const IMG_PATH = "https://versemart.deepverselab.com/storage/brand";

    if (isLoading) return <div className="py-10 text-center font-medium">Loading Brands...</div>;
    if (!brands || brands.length === 0) return null;

    const duplicatedBrands = [...brands, ...brands, ...brands]; 
      console.log(brands)
    return (
        <section className="py-12 bg-[#FDFCFD] overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#00153D] mb-1">Top Brands</h2>
                    <div className="w-16 h-1 bg-[#D81B60] mx-auto rounded-full"></div>
                </div>

                {/* Infinite Slider */}
                <div className="relative flex items-center">
                    <motion.div
                        className="flex gap-4 md:gap-6"
                        animate={{ x: [0, -200 * brands.length] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                        style={{ width: "max-content" }}
                    >
                        {duplicatedBrands.map((brand, index) => (
                            <Link
                                to={`/brand/${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                                state={{ brandId: brand.id }}
                                key={index}
                                className="w-36 h-24 md:w-52 md:h-32 flex items-center justify-center bg-white border border-gray-100 rounded-lg p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-md transition-all shrink-0"
                            >
                                <img
                                    src={`${IMG_PATH}/${brand.image}`}
                                    alt={brand.name}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        if (!target.src.includes('storage/app/public')) {
                                            target.src = `https://versemart.deepverselab.com/storage/app/public/brand/${brand.image}`;
                                        } else {
                                            target.src = 'https://via.placeholder.com/200x100?text=Brand';
                                        }
                                    }}
                                />
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BrandCarousel;