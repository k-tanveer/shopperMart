import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import config from '../../../config';

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    searchProducts: builder.query({
      query: input => `products/category/${input}`,
    }),
  }),
});

export const {useGetProductsQuery, useSearchProductsQuery} = productApi;
