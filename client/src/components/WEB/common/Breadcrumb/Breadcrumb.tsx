import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface Props {
    title: string;
    link_items?: BreadcrumbItem[];
    bgImage?: string;
}

const Breadcrumb: React.FC<Props> = ({
    title,
    link_items = [],
    bgImage
}) => {
    return (
        <div
            className="relative overflow-hidden   min-h-40 md:min-h-62.5 flex items-center group"
            style={{
                backgroundColor: '#f3f4f6', // fallback color
                backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/40 to-transparent z-1"></div>
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 skew-x-[-20deg] translate-x-20 z-1 hidden md:block"></div>
            <div className="relative z-10 container mx-auto px-8 md:px-16 flex flex-col gap-4">
                <div className="flex flex-col">
                    <h1 className="text-3xl md:text-6xl font-jakarta-Extrabold tracking-tight text-white drop-shadow-lg uppercase">
                        {title}
                    </h1>
                    <div className="flex items-center gap-1 mt-2">
                        <div className="w-16 h-1.5 bg-pink-500 rounded-full"></div>
                        <div className="w-3 h-1.5 bg-white/50 rounded-full"></div>
                    </div>
                </div>
                <nav className="flex items-center">
                    <ul className="flex flex-wrap items-center gap-3 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-medium text-white/90 border border-white/10">
                        {link_items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <Link
                                    to={item.href}
                                    className={`flex items-center gap-1.5 transition-all duration-300
                                    ${idx === link_items.length - 1
                                            ? 'text-pink-400 font-bold'
                                            : 'hover:text-white text-white/70'}`}
                                >
                                    {idx === 0 && <FaHome className="text-sm" />}
                                    <span className="uppercase tracking-wider">{item.label}</span>
                                </Link>

                                {idx !== link_items.length - 1 && (
                                    <FaChevronRight className="text-[10px] text-white/30" />
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Breadcrumb;