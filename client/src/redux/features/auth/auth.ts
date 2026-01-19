import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseurl } from '../../utils';

// 1. Login Request er interface
interface LoginRequest {
    email: string;
    password: string;
}

// 2. Login Response er interface
interface LoginResponse {
    success: boolean;
    message: string;
    token: string;
    data: {
        id: string;
        email: string;
        name: string;
        role: string;
        createdAt: string;
        updatedAt: string;
    };
}

const AuthApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseurl(),
    }),
    tagTypes: ["admin"],
    endpoints: (builder) => ({
        // Generic: <ReturnValue, ArgumentValue>
        loginAdmin: builder.mutation<LoginResponse, LoginRequest>({
            query: (loginData) => ({
                url: '/users/login',
                method: "POST",
                body: loginData
            })
        })
    })
});

export const {
    useLoginAdminMutation
} = AuthApi;

export default AuthApi;