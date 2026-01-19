import React, { type ReactNode, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import BackTotop from '../../common/button/BackTotop'


interface UserLayoutProps {
    children?: ReactNode;
    hideFooter?: boolean;
    className?: string;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children, hideFooter = false, className = "" }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${className} relative antialiased min-h-screen bg-white text-gray-900`}>
            
            {!isSticky && (
                <header className="w-full bg-primary relative z-[100]">
                    <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                </header>
            )}

            <AnimatePresence>
                {isSticky && (
                    <motion.header
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 w-full z-[1000] shadow-xl bg-primary"
                    >
                        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                    </motion.header>
                )}
            </AnimatePresence>

            <main className="relative z-10 transition-all duration-300">
                <div className="min-h-[calc(100vh-200px)] ">
                    {children ? children : <Outlet />}
                </div>
            </main>

            <BackTotop />

            {!hideFooter && (
                <footer className="relative z-10 lg:pl-20">
                    <Footer />
                </footer>
            )}
        </div>
    )
}

export default UserLayout