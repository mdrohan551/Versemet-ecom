import React from 'react';
import { Link } from 'react-router-dom';
import StaticCategorySkeleton from '../Loader/StaticCategorySkeleton';


const StaticCategories: React.FC<{ allCategories: any, isLoading: boolean }> = ({ allCategories, isLoading }) => {


    return (
        <section className="py-12  ">
            <div className="container mx-auto px-4">
                {isLoading ? (
                    <StaticCategorySkeleton count={18} />
                ) : (
                    <div className="grid grid-cols-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 md:gap-8">
                        {allCategories?.map((category: any) => (
                            <Link
                                key={category.id}
                                to={`/category/${category.slug}`}
                                className="group flex flex-col items-center"
                            >
                                <div className="relative w-full aspect-square rounded-md flex items-center justify-center p-2 md:p-4 transition-all duration-500 bg-linear-to-b from-[#f0f9ff] to-white dark:from-bg border border-gray-50 group-hover:border-primary/20 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group-hover:-translate-y-2 overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img
                                        src={category.icon_full_url?.path}
                                        alt={category.name}
                                        className="relative z-10 w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="mt-2 text-[10px] md:text-[13px] font-jakarta-bold text-gray-600 dark:text-gray-300 text-center leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                    {category.name}
                                </h3>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default StaticCategories;