import React, { useState, useEffect } from 'react';
import { useGetLatestProductsQuery } from '../../../redux/features/Product/Product';
import ProductCard from '../common/card/ProductCard';
import { useInView } from 'react-intersection-observer';
import ProductCardSkeleton from '../Loader/ProductCardSkeleton';

const AllProducts: React.FC = () => {
    const [offset, setOffset] = useState(1);
    const { ref, inView } = useInView();

    const { data, isLoading, isFetching, error } = useGetLatestProductsQuery({
        limit: 10,
        offset: offset
    });

    useEffect(() => {
        if (inView && !isFetching && data && data.products.length < data.total_size) {
            setOffset(prev => prev + 1);
        }
    }, [inView, isFetching]);

    // Initial Loading State
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
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary ">Latest Products</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {data?.products.map((product, index) => (
                    <ProductCard key={`${product.id}-${index}`} product={product} />
                ))}

                {isFetching && (
                    <ProductCardSkeleton count={5} />
                )}
            </div>

            {/* Bottom observer trigger */}
            <div ref={ref} className="h-10 flex justify-center items-center mt-6">
                {!isFetching && data && data.products.length >= data.total_size && (
                    <p className="text-gray-400 text-sm italic">You have reached the end.</p>
                )}
            </div>
        </div>
    );
};

export default AllProducts;