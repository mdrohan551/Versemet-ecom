// RouterChangeLineAnimation.tsx
import React, { useEffect } from "react";
import NProgress from "nprogress";
import { useLocation } from "react-router-dom";
import "nprogress/nprogress.css"; // NProgress default styles

const RouterChangeLineAnimation: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        NProgress.configure({ showSpinner: false });
        NProgress.start(); 
        const timer = setTimeout(() => NProgress.done(), 400); // adjust time as needed
        return () => clearTimeout(timer);
    }, [location]);

    return null;
};

export default RouterChangeLineAnimation;
