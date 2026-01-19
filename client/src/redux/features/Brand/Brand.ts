import { createApi } from "@reduxjs/toolkit/query/react";
import { commonBaseQuery } from "../commonBaseQuery";

export interface Brand {
    id: number;
    name: string;
    image: string;
    status: number;
    created_at: string;
    updated_at: string;
    brand_products_count: number;
    translations: any[];
}


export interface BrandProduct {
    id: number;
    name: string;
    price: number;

}

type BrandsResponse = Brand[];

const BrandsAPI = createApi({
    reducerPath: "brands",
    baseQuery: commonBaseQuery,
    tagTypes: ['brands', "singleBrand", "brandProducts"], 
    endpoints: (builder) => ({

        GetAllBrands: builder.query<BrandsResponse, void>({
            query: () => ({
                url: '/brands',
                method: 'GET',
            }),
            providesTags: ['brands']
        }),
        GetBrandProducts: builder.query<any, { id: number | string; limit: number; offset: number }>({
            query: ({ id, limit, offset }) => ({
                url: `/brands/products/${id}`,
                method: 'GET',
                params: { limit, offset },
            }),
            providesTags: (result, error, arg) => [{ type: 'brandProducts', id: arg.id }]
        }),

    })
})

export const {
    useGetAllBrandsQuery,
    useGetBrandProductsQuery,
} = BrandsAPI;

export default BrandsAPI;