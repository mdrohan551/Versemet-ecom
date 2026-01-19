import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const sliderData = [
    {
        id: 1,
        image: "https://d62ipmwrm4ymk.cloudfront.net/home_hero_banner/474a4018-e8cb-47c1-82a9-d9a17a668443.jpg",
        link: "/category/shoes",
    },
    {
        id: 2,
        image: "https://d62ipmwrm4ymk.cloudfront.net/home_hero_banner/9479bae1-708e-46b1-929e-d386842e94b8.jpg",
        link: "/category/lifestyle",
    },
    {
        id: 3,
        image: "https://d62ipmwrm4ymk.cloudfront.net/home_hero_banner/37f7653a-becf-4d23-b8fd-fbd468417a54.jpg",
        link: "/category/men",
    }
];

const CategoryBigSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextIndex = (currentIndex + 1) % sliderData.length;

    const slideNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, []);

    const slidePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
    }, []);

    useEffect(() => {
        const timer = setInterval(slideNext, 6000);
        return () => clearInterval(timer);
    }, [slideNext]);

    const slideVariants = {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "-100%" }
    };

    return (
        <section className="w-full py-4 md:py-8 bg-white dark:bg-Dark_primary overflow-hidden">
            <div className="container mx-auto px-2 ">
                <div className="flex gap-4 h-55 sm:h-87.5 md:h-112.5 lg:h-130">

                    {/* --- MAIN BIG IMAGE --- */}
                    <div className="relative flex-[4] rounded-2xl md:rounded-[40px] overflow-hidden  bg-gray-100">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div
                                key={`main-${currentIndex}`}
                                variants={slideVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Link to={sliderData[currentIndex].link} className="block w-full h-full">
                                    <img
                                        src={sliderData[currentIndex].image}
                                        alt="Main banner"
                                        className="w-full h-full object-cover"
                                    />

                                </Link>
                            </motion.div>
                        </AnimatePresence>

                        {/* Arrows */}
                        <div className="absolute inset-0 flex items-center justify-between px-5 z-20 pointer-events-none lg:hidden">
                            <button onClick={slidePrev} className="pointer-events-auto w-10 h-10 bg-black/20 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all">
                                <HiChevronLeft size={24} />
                            </button>
                            <button onClick={slideNext} className="pointer-events-auto w-10 h-10 bg-black/20 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all">
                                <HiChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* --- SMALL PREVIEW --- */}
                    <div
                        onClick={slideNext}
                        className="hidden md:block flex-1 relative rounded-2xl md:rounded-[40px] overflow-hidden cursor-pointer shadow-lg bg-gray-200"
                    >
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div
                                key={`prev-${nextIndex}`}
                                variants={slideVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                className="w-full h-full absolute inset-0"
                            >
                                <img
                                    src={sliderData[nextIndex].image}
                                    alt="Next preview"
                                    className="w-full h-full object-cover "
                                />
                                <div className="absolute inset-0 flex items-center justify-center ">
                                    <HiChevronRight className="text-primary rounded-full text-4xl bg-white/20 backdrop-blur-2xl " />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* Dots */}
                <div className="mt-6 flex justify-center items-center gap-2">
                    {sliderData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 ${index === currentIndex ? "w-10 h-2 bg-primary rounded-full" : "w-2 h-2 bg-gray-300 rounded-full"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryBigSlider;