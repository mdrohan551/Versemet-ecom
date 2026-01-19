import React, { useEffect } from 'react';
import { HiX } from "react-icons/hi";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    maxWidth?: string;
}

const CommonModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    maxWidth = "max-w-xl"
}) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <div className={`fixed inset-0 z-3000 flex items-center justify-center p-4 transition-all duration-300 
            ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
            {/* Backdrop Layer */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Body */}
            <div className={`bg-white w-full ${maxWidth} rounded-2xl shadow-2xl relative z-10 p-6 
                transition-all duration-300 transform 
                ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}
            >
                {/* Close Button (Top-Right) */}
                <button
                    onClick={onClose}
                    className="absolute top-1 right-1 p-1 rounded-full hover:bg-gray-100 transition-colors group"
                >
                    <HiX className="text-gray-400 group-hover:text-primary text-2xl cursor-pointer" />
                </button>

                {/* Content Area */}
                <div className="mt-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CommonModal;