import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slice/AuthSlice";
import themeSlice from "../features/Theme/Theme";
import AuthApi from "../features/auth/auth";
import CategoriesAPI from "../features/Category/Category";
import BrandsAPI from "../features/Brand/Brand";
import ProductAPI from "../features/Product/Product";


export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    theme: themeSlice,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [CategoriesAPI.reducerPath]: CategoriesAPI.reducer,
    [BrandsAPI.reducerPath]: BrandsAPI.reducer,
    [ProductAPI.reducerPath]: ProductAPI.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthApi.middleware,
      CategoriesAPI.middleware,
      BrandsAPI.middleware,
      ProductAPI.middleware,

    ),
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
