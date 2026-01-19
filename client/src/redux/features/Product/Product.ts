import { createApi } from "@reduxjs/toolkit/query/react";
import { commonBaseQuery } from "../commonBaseQuery";


export interface ThumbnailFullUrl {

    path: string;

    status: number;

}



export interface Product {

    id: number;

    added_by: string;

    user_id: number;

    name: string;

    slug: string;

    product_type: string;

    category_id: number;

    brand_id: number;

    unit: string;

    min_qty: number;

    thumbnail: string;

    thumbnail_full_url: ThumbnailFullUrl;

    unit_price: number;

    purchase_price: number;

    tax: number;

    tax_type: string;

    tax_model: string;

    discount: number;

    discount_type: string;

    current_stock: number;

    details: string;

    created_at: string;

    updated_at: string;

    wish_list_count: number;

    reviews_count: number;

    rating: any[];

    tags: any[];

}



export interface ProductsResponse {

    total_size: number;

    limit: string | number;

    offset: string | number;

    products: Product[];

}



export interface ProductQueryParams {

    limit?: number;

    offset?: number;

}

const ProductAPI = createApi({
    reducerPath: "products",
    baseQuery: commonBaseQuery,
    tagTypes: ['products', 'latestProducts'],
    endpoints: (builder) => ({
        GetLatestProducts: builder.query<ProductsResponse, ProductQueryParams>({
            // Added default values to prevent destructuring errors
            query: ({ limit = 5, offset = 1 } = {}) =>
                `products/latest?limit=${limit}&offset=${offset}`,

            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },

            merge: (currentCache, newItems, { arg }) => {
                // If offset is 1 (first page), replace the cache instead of merging
                // This prevents duplicate data when the component remounts
                if (arg.offset === 1) {
                    return newItems;
                }
                if (newItems?.products) {
                    currentCache.products.push(...newItems.products);
                }
            },

            forceRefetch({ currentArg, previousArg }) {
                return currentArg?.offset !== previousArg?.offset;
            },
            providesTags: ['latestProducts']
        }),
    })
});

export const { useGetLatestProductsQuery } = ProductAPI;
export default ProductAPI;