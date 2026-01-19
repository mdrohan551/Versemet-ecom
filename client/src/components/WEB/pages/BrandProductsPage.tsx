import React, { useState, useEffect, useMemo } from 'react';
import {  useLocation, useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import { useGetBrandProductsQuery } from '../../../redux/features/Brand/Brand';
import { useGetAllCategoriesQuery } from '../../../redux/features/Category/Category';
import ProductCard from '../common/card/ProductCard';
import ProductCardSkeleton from '../Loader/ProductCardSkeleton';

const BrandProductsPage: React.FC = () => {
    const location = useLocation();
    const { brandId } = location.state || {};
    const { brand_name } = useParams();

    // Infinite Scroll State
    const [offset, setOffset] = useState(1);
    const [allProducts, setAllProducts] = useState<any[]>([]);
    const { ref, inView } = useInView();

    // API Calls
    const { data: productData, isLoading, isFetching, error } = useGetBrandProductsQuery({
        limit: 10,
        offset: offset,
        id: brandId
    });

    const { data: allCategories } = useGetAllCategoriesQuery();
    useEffect(() => {
        if (productData && Array.isArray(productData)) {
            if (offset === 1) {
                setAllProducts(productData);
            } else {
                setAllProducts(prev => [...prev, ...productData]);
            }
        }
    }, [productData, offset]);
    useEffect(() => {
        if (inView && !isFetching && productData && productData.length === 10) {
            setOffset(prev => prev + 1);
        }
    }, [inView, isFetching]);
    const categoryInfo = useMemo(() => {
        if (!allProducts.length || !allCategories) return null;
        const catId = allProducts[0]?.category_id;
        const matchedCat = allCategories.find((cat: any) => cat.id === catId);

        return matchedCat ? {
            name: matchedCat.name,
            image: matchedCat.icon_full_url?.path
        } : null;
    }, [allProducts, allCategories]);



    if (isLoading && offset === 1) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <ProductCardSkeleton count={10} />
                </div>
            </div>
        );
    }

    if (error) return <div className="text-center py-10 text-red-500 font-bold">Error loading products!</div>;

    return (
        <>
            <Breadcrumb
                title={categoryInfo?.name || brand_name?.replaceAll('-', ' ') || "Products"}
                bgImage={categoryInfo?.image || "/images/breadimg.jpg"}
                link_items={[
                    { label: 'Home', href: '/' },
                    { label: brand_name ? brand_name.replaceAll('-', ' ') : "Brand" },
                ]}
            />

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {allProducts.map((product, index) => (
                        <ProductCard key={`${product.id}-${index}`} product={product} />
                    ))}

                    {isFetching && (
                        <ProductCardSkeleton count={5} />
                    )}
                </div>

                {/* Infinite Scroll Trigger */}
                <div ref={ref} className="h-20 flex justify-center items-center mt-6">
                    {!isFetching && productData && productData.length < 10 && allProducts.length > 0 && (
                        <p className="text-gray-400 text-sm italic">No more products found.</p>
                    )}
                    {isFetching && <p className="text-primary animate-pulse">Loading more...</p>}
                </div>
            </div>
        </>
    );
};

export default BrandProductsPage;