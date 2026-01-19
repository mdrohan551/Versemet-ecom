import React from 'react';
import Banner from '../Banner/Banner';
import StaticCategories from '../categories/StaticCategories';
import CategoryBigSlider from '../categories/CategoryBigSlider';
import CategoryExclusive from '../categories/CategoryExclusive';
import StickerBanner from '../Banner/StickerBanner';
import BrandCarousel from '../Brand/BrandCarosul';
import { useGetAllBrandsQuery } from '../../../redux/features/Brand/Brand';
import { useGetAllCategoriesQuery } from '../../../redux/features/Category/Category';
import { useGetLatestProductsQuery } from '../../../redux/features/Product/Product';
import AllProducts from '../Products/AllProducts';


const HomePage: React.FC = () => {
    // brand api 
    const { data: getbrandData, isLoading: brandLoading } = useGetAllBrandsQuery()
    // static category 
    const { data: allCategories, isLoading: StaticCatLoading } = useGetAllCategoriesQuery();
    // all product 
    const { data: products, isLoading } = useGetLatestProductsQuery({ limit: 10, offset: 0 });
    console.log(products)
    return (
        <>
            <Banner />
            <div className='bg-primary/5 dark:bg-Dark_primary'>
                <StaticCategories allCategories={allCategories} isLoading={StaticCatLoading} />
            </div>
            <CategoryBigSlider />
            <CategoryExclusive />
            <StickerBanner />
            <BrandCarousel brands={getbrandData} isLoading={brandLoading} />
            <AllProducts />

        </>
    );
};

export default HomePage;
