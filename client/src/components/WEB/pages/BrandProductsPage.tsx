import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';

const BrandProductsPage: React.FC = () => {
    const location = useLocation();
    const { brandId } = location.state || {};
    const { brand_name } = useParams()
    return (
        <>
            <Breadcrumb
                title="Baby Accessories"
                bgImage="/images/breadimg.jpg"
                link_items={[
                    { label: 'Home', href: '/' },
                    { label: 'Brands', href: `/brand/${brand_name}` },
                ]}
            />



        </>
    );
};

export default BrandProductsPage;