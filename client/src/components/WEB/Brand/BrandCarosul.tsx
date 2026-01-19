import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Brand {
    id: number;
    name: string;
    image: string;
    status: number;
    brand_products_count: number;
}

interface BrandCarouselProps {
    brands: Brand[] | undefined;
    isLoading: boolean;
}

const BrandCarousel: React.FC<BrandCarouselProps> = ({ brands, isLoading }) => {
    if (isLoading) return <div className="py-10 text-center">Loading Brands...</div>;
    if (!brands || brands.length === 0) return null;
    const duplicatedBrands = [...brands, ...brands];
    const createSlug = (name: string) => {
        return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    };

    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary inline-block relative pb-2">
                        Top Brands
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-pink-600 rounded-full"></span>
                    </h2>
                </div>

                <div className="relative flex overflow-hidden">
                    <motion.div
                        className="flex space-x-8 md:space-x-16 items-center"
                        animate={{
                            x: [0, -100 * brands.length],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                        style={{ display: "flex", width: "max-content" }}
                    >
                        {duplicatedBrands.map((brand, index) => (
                            <Link
                                to={`/brand/${createSlug(brand.name)}`}
                                state={{ brandId: brand.id }}
                                key={`${brand.id}-${index}`}
                                className="shrink-0 w-32 h-20 md:w-40 md:h-24 flex items-center justify-center border border-gray-100 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <img
                                    src={`/images/brands/${brand.image}`}
                                    alt={brand.name}
                                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Brand';
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