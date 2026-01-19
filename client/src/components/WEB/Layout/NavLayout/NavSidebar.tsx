import React, { useState } from 'react';
import { HiX, HiChevronDown, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import {
    HiOutlineSparkles,
    HiOutlineEmojiHappy
} from "react-icons/hi";
import { GiBabyBottle, GiLipstick } from "react-icons/gi";
import { MdOutlineMan, MdOutlineWoman } from "react-icons/md";

export const sidebarMenu = [
    {
        title: "For You",
        icon: <HiOutlineSparkles />,
        href: "/for-you",
        subMenu: [
            { title: "New Arrivals", href: "/new-arrivals", items: ["Today's Deals", "Best Sellers"] }
        ]
    },
    {
        title: "Men",
        icon: <MdOutlineMan className="text-2xl" />,
        href: "/men",
        subMenu: [
            {
                title: "Men Fashion Accessories",
                href: "/men-accessories",
                items: ["Men Bags", "Men Belts", "Men Caps & Hats", "Men Jewellery", "Men Sunglasses", "Men Wallet", "Men Watch"]
            },
            {
                title: "Men Bottomwear",
                href: "/men-bottomwear",
                items: ["Jeans", "Chinos", "Joggers", "Shorts"]
            },
            {
                title: "Men Footwear",
                href: "/men-footwear",
                items: ["Casual Shoes", "Formal Shoes", "Sneakers", "Sandals"]
            },
            {
                title: "Men Topwear",
                href: "/men-topwear",
                items: ["T-Shirts", "Shirts", "Polo", "Jackets"]
            }
        ]
    },
    {
        title: "Women",
        icon: <MdOutlineWoman className="text-2xl" />,
        href: "/women",
        subMenu: [
            {
                title: "Women Fashion Accessories",
                href: "/women-accessories",
                items: ["Handbags", "Jewellery", "Scarves", "Sunglasses"]
            },
            {
                title: "Women Clothing",
                href: "/women-clothing",
                items: ["Saree", "Kurti", "Salwar Kameez", "Tops"]
            }
        ]
    },
    {
        title: "Kids",
        icon: <HiOutlineEmojiHappy />,
        href: "/kids",
        subMenu: [
            { title: "Boys Clothing", href: "/boys-clothing", items: ["T-Shirts", "Pants"] },
            { title: "Girls Clothing", href: "/girls-clothing", items: ["Dresses", "Skirts"] }
        ]
    },
    {
        title: "Baby",
        icon: <GiBabyBottle />,
        href: "/baby",
        subMenu: [
            { title: "Baby Clothing", href: "/baby-clothing", items: ["Rompers", "Sets"] },
            { title: "Baby Accessories", href: "/baby-accessories", items: ["Bibs", "Mittens"] }
        ]
    },
    {
        title: "Health & Beauty",
        icon: <GiLipstick />,
        href: "/health-beauty",
        subMenu: [
            { title: "Skin Care", href: "/skin-care", items: ["Moisturizer", "Sunscreen"] },
            { title: "Hair Care", href: "/hair-care", items: ["Shampoo", "Oil"] }
        ]
    }
];
// side bar footer 
export const sidebarFooterData = [
    {
        title: "Govaly Helpline",
        icon: <HiOutlinePhone className="text-primary" />,
        href: "#",
        isExternal: true,
        bgColor: "bg-pink-50/30",
        borderColor: "border-pink-50"
    },
    {
        title: "support@govaly.com.bd",
        icon: <HiOutlineMail className="text-pink-400" />,
        href: "mailto:support@govaly.com.bd",
        isExternal: true,
        bgColor: "bg-white",
        borderColor: "border-gray-100"
    },
    {
        title: "01969901212",
        icon: <HiOutlinePhone className="text-pink-400" />,
        href: "tel:01969901212",
        isExternal: false,
        bgColor: "bg-white",
        borderColor: "border-gray-100"
    },
    {
        title: "01907104920",
        icon: <FaWhatsapp className="text-green-500" />,
        href: "https://wa.me/01907104920",
        isExternal: true,
        bgColor: "bg-white",
        borderColor: "border-gray-100"
    }
];

interface NavSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const NavSidebar: React.FC<NavSidebarProps> = ({ isOpen, onClose }) => {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    return (
        <>
            {/* Dark Overlay */}
            <div
                className={`fixed inset-0 z-[1001 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={onClose}
            />

            {/* Sidebar Container */}
            <aside
                className={`fixed left-0 top-0 h-full bg-white shadow z-[1002] transition-all duration-300 border-r border-gray-100 flex flex-col
    ${isOpen ? 'w-72 translate-x-0' : '-translate-x-full w-72'} 
    `}>

                {/* Header */}
                <div className="p-4 border-b flex items-center justify-between min-h-16">
                    {isOpen ? (
                        <>
                            <span className="text-primary font-jakarta-bold text-xl uppercase tracking-tight">Categories</span>
                            <HiX className="cursor-pointer text-gray-400 text-2xl" onClick={onClose} />
                        </>
                    ) : (
                        <div className="w-full flex justify-center">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">G</div>
                        </div>
                    )}
                </div>

                {/* Categories Menu */}
                <nav className="flex-1 overflow-y-auto custom-scrollbar">
                    {sidebarMenu.map((menu, idx) => (
                        <div key={idx} className="border-b border-gray-50 last:border-0">
                            <div
                                className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-all group ${isOpen ? 'justify-between' : 'justify-center'}`}
                                onClick={() => isOpen && setOpenSubMenu(openSubMenu === menu.title ? null : menu.title)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-xl text-gray-500 group-hover:text-primary transition-colors">
                                        <span className="text-lg">{menu.icon}</span>
                                    </div>
                                    {isOpen && <span className="text-[14px] font-jakarta-medium text-gray-700">{menu.title}</span>}
                                </div>
                                {isOpen && menu.subMenu && (
                                    <HiChevronDown className={`text-gray-400 transition-transform ${openSubMenu === menu.title ? 'rotate-180' : ''}`} />
                                )}
                            </div>

                            {isOpen && menu.subMenu && openSubMenu === menu.title && (
                                <div className="bg-gray-50/50 pb-2 animate-fadeIn">
                                    {menu.subMenu.map((sub, sIdx) => (
                                        <div key={sIdx} className="px-6 py-2 border-l-2 border-primary/20 ml-6 mb-1">
                                            <p className="text-primary text-[11px] font-jakarta-bold uppercase mb-2 italic">See All {sub.title}</p>
                                            <div className="space-y-1.5">
                                                {sub.items?.map((item, iIdx) => (
                                                    <a key={iIdx} href="#" className="block text-[13px] text-gray-600 hover:text-primary transition-colors">
                                                        {item}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Footer Section - Updated to use sidebarFooterData */}
                {isOpen && (
                    <div className="p-4 bg-white space-y-2 border-t mt-auto">
                        {sidebarFooterData.map((item, fIdx) => (
                            <a
                                key={fIdx}
                                href={item.href}
                                className={`flex items-center justify-between p-2 rounded-lg border ${item.borderColor} ${item.bgColor} group hover:border-primary/30 transition-all`}
                            >
                                <div className="flex items-center gap-2 text-gray-600">
                                    {item.icon}
                                    <span className="text-[12px] font-jakarta-medium truncate max-w-45">
                                        {item.title}
                                    </span>
                                </div>
                                {item.isExternal && <span className="text-gray-400 text-[10px]">↗</span>}
                            </a>
                        ))}
                        <div className="text-[10px] text-center text-gray-400 pt-2 font-jakarta-medium">
                            © 2026 Govaly Team
                        </div>
                    </div>
                )}
            </aside >
        </>
    );
};

export default NavSidebar;