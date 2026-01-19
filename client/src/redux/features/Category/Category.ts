import { createApi } from "@reduxjs/toolkit/query/react";
import { commonBaseQuery } from "../commonBaseQuery";

export interface CategoryIcon {
    path: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    icon: string;
    icon_full_url: CategoryIcon;
    parent_id: number;
    position: number;
    priority: number;
    product_count: number;
    home_status: number;
    status: number;
    created_at: string;
    updated_at: string;
    childes: any[];
    translations: any[];
}

type CategoriesResponse = Category[];

const CategoriesAPI = createApi({
    reducerPath: "categories",
    baseQuery: commonBaseQuery,
    tagTypes: ['categories', "singleCategory"],
    endpoints: (builder) => ({

        GetAllCategories: builder.query<CategoriesResponse, void>({
            query: () => ({
                url: '/categories',
                method: 'GET',
            }),
            providesTags: ['categories']
        }),
    })
})

export const {
    useGetAllCategoriesQuery,
} = CategoriesAPI
export default CategoriesAPI;