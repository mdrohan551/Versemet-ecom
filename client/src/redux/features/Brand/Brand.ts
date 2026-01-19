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

type BrandsResponse = Brand[];
const BrandsAPI = createApi({
    reducerPath: "brands",
    baseQuery: commonBaseQuery,
    tagTypes: ['brands', "singleBrand"],
    endpoints: (builder) => ({

        GetAllBrands: builder.query<BrandsResponse, void>({
            query: () => ({
                url: '/brands',
                method: 'GET',
            }),
            providesTags: ['brands']
        }),

    })
})

export const {
    useGetAllBrandsQuery,
} = BrandsAPI;

export default BrandsAPI;