import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AppRootState } from "../store/store";
import { getBaseurl } from "../utils";


export const commonBaseQuery = fetchBaseQuery({
    baseUrl: getBaseurl(),
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as AppRootState;
        const token = state?.auth?.token;

        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        headers.set("accept", "application/json");
        return headers;
    },
     // credentials:"include"
});