import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag, HiOutlineHeart, HiStar } from "react-icons/hi";

interface Rating {
    average: string | number;
}

interface Product {
    id: number;
    name: string;
    slug: string;
    unit_price: number;
    discount: number;
    thumbnail_full_url: { path: string }; 
    reviews_count?: number;
    rating: Rating[];
}

interface CardProps {
    product: Product;
}

const ProductCard: React.FC<CardProps> = ({ product }) => {
    const discountPrice = product.discount > 0
        ? product.unit_price - (product.unit_price * product.discount / 100)
        : null;

    // সেফটি চেক সহ এভারেজ রেটিং
    const avgRating = product.rating && product.rating.length > 0
        ? Number(product.rating[0].average)
        : 0;

    return (
        <div className="group bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden relative flex flex-col h-full">
            {product.discount > 0 && (
                <div className="absolute top-3 left-3 z-10 bg-pink-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    {product.discount}% OFF
                </div>
            )}

            <button className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-pink-600 transition-colors shadow-sm">
                <HiOutlineHeart className="text-lg" />
            </button>

            <Link to={`/product/${product.slug}`} className="block overflow-hidden h-44 md:h-60 bg-gray-50 shrink-0">
                <img
                    src={product.thumbnail_full_url?.path || '/placeholder.png'}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
            </Link>

            <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-1">
                    <div className="flex items-center text-yellow-400">
                        <HiStar className="text-sm" />
                        <span className="text-xs font-bold ml-1 text-gray-700">
                            {avgRating > 0 ? avgRating.toFixed(1) : "0.0"}
                        </span>
                    </div>
                    <span className="text-[10px] text-gray-400">
                        ({product.reviews_count || 0})
                    </span>
                </div>

                <Link to={`/product/${product.slug}`} className="flex-grow">
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 hover:text-pink-600 transition-colors leading-tight">
                        {product.name}
                    </h3>
                </Link>

                <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-pink-600 leading-none">
                            ৳{discountPrice ? discountPrice.toLocaleString() : product.unit_price.toLocaleString()}
                        </span>
                        {discountPrice && (
                            <span className="text-xs text-gray-400 line-through mt-1">
                                ৳{product.unit_price.toLocaleString()}
                            </span>
                        )}
                    </div>

                    <button className="p-2.5 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition-colors shadow-md active:scale-95">
                        <HiOutlineShoppingBag className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;