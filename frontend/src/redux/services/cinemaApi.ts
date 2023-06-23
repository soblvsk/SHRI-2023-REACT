import { Cinema } from '@/lib/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cinemaApi = createApi({
  reducerPath: 'cinemaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getCinemas: builder.query<Cinema[], void>({ query: () => 'cinemas' }),
  }),
});

export const { useGetCinemasQuery } = cinemaApi;
