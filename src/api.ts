//sample RTK query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: '',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getSomething: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetSomethingQuery } = api;
