import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

const Search: React.FC = () => {
    return (
        <div className="w-full max-w-2xl relative group drop-shadow-2xl ">
            <div className="flex items-center bg-white rounded-full p-1.5 transition-all duration-300 focus-within:ring-4 focus-within:ring-white/30">
                {/* Search Icon */}
                <div className="pl-5 text-gray-400">
                    <HiOutlineSearch className="text-2xl" />
                </div>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Search for clothes, accessories..."
                    className="text-sm w-full bg-transparent border-none outline-none px-4 py-1 text-gray-800 font-jakarta-medium text-lg placeholder:text-gray-400"
                />

                {/* Search Button */}
                <button className="bg-primary hover:bg-secondary  text-white px-10 py-2 rounded-full font-jakarta-bold text-sm transition-all active:scale-95 shadow-lg capitalize tracking-wider cursor-pointer ">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;