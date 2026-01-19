// Routers.tsx
import React, { useEffect } from 'react' // useEffect add koro
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom' // useLocation add koro
import RouterChangeLineAnimation from './RouterChangeLineAnimation';
import UserLayout from '../components/WEB/Layout/NavLayout/UserLayout';
import HomePage from '../components/WEB/pages/HomePage';
import NotFound from './NotFound';
import BrandProductsPage from '../components/WEB/pages/BrandProductsPage';





const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <RouterChangeLineAnimation />
            <Routes>
                {/* [******************************public[****************************** ] */}
                <Route path='/' element={<UserLayout />}>
                    <Route index element={<HomePage />} />

                    <Route path='brand/:brand_name' element={<BrandProductsPage />} />

                </Route>
                {/* [[******************************pirvet[****************************** ] */}

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers