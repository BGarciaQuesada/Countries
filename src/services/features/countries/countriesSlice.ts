import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countrySlice = createApi({
    reducerPath: 'countrySlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: () => 'all',
        }),
        getAllRegions: builder.query({
            query: () => `all?fields=region`,
        }),
        getCountriesByRegion: builder.query({
            query: (region: string) => `region/${region}`,
        }),
    }),
});

export const { useGetAllDataQuery, useGetAllRegionsQuery, useGetCountriesByRegionQuery } = countrySlice;
