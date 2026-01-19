import React, { useState, useEffect } from 'react';
import { HiMenuAlt2, HiOutlineHeart, HiOutlineUser, HiOutlineShoppingBag, HiOutlineSearch } from "react-icons/hi"; // Search icon add kora hoyeche
import { Link, useLocation } from 'react-router-dom';
import NavSidebar from './NavSidebar';
import CommonModal from '../../common/modal/CommonModal';
import Search from '../../common/searchbar/Search';


interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // Modal state
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        if (window.scrollY > 320) {
          setShowSearch(true);
        } else {
          setShowSearch(false);
        }
      } else {
        setShowSearch(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <>
      <nav className="bg-primary text-white px-4 py-3 shadow z-[1000] transition-all duration-300 sticky top-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-3xl cursor-pointer hover:scale-110 transition active:scale-95 flex items-center justify-center"
            >
              <HiMenuAlt2 />
            </button>

            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.webp"
                alt="Govaly Logo"
                className="h-8 md:h-15 w-auto object-contain brightness-0 invert"
              />
            </Link>
          </div>

          {/* Desktop Search: hidden on mobile, visible on lg screens */}
          <div className={`transition-all duration-300 flex-1 hidden lg:flex justify-center ${showSearch ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            {showSearch && <Search />}
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            {/* Mobile Search Icon: visible only on small screens when showSearch is true */}
            {showSearch && (
              <button 
                onClick={() => setIsSearchModalOpen(true)}
                className="lg:hidden flex flex-col items-center group"
              >
                <HiOutlineSearch className="text-2xl group-hover:scale-110 transition" />
                <span className="text-[10px] mt-1">Search</span>
              </button>
            )}

            <Link to="/wishlist" className="flex flex-col items-center relative group">
              <span className="absolute -top-1 -right-1 bg-white text-primary rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">1</span>
              <HiOutlineHeart className="text-2xl group-hover:scale-110 transition" />
              <span className="text-[10px] mt-1">Wishlist</span>
            </Link>
            
            <Link to="/cart" className="flex flex-col items-center group">
              <HiOutlineShoppingBag className="text-2xl group-hover:scale-110 transition" />
              <span className="text-[10px] mt-1">Cart</span>
            </Link>
            
            <Link to="/profile" className="flex flex-col items-center group">
              <HiOutlineUser className="text-2xl group-hover:scale-110 transition" />
              <span className="text-[10px] mt-1">Profile</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* CommonModal for Mobile Search */}
      <CommonModal 
        isOpen={isSearchModalOpen} 
        onClose={() => setIsSearchModalOpen(false)}
        maxWidth="max-w-md"
      >
        <div className="py-4">
          <p className="text-black mb-3 font-semibold text-center">Search Products</p>
          <Search />
        </div>
      </CommonModal>

      <NavSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;