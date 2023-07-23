import { Cinema } from '@/constants/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cinemaApi = createApi({
  reducerPath: 'cinemaAPi',
  tagTypes: ['Cinema'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getCinemas: builder.query<Cinema[], void>({
      query: () => ({ url: 'cinemas' }),
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ id, type: 'Cinema' as const })).concat([{ type: 'Cinema', id: 'LIST' }])
          : [{ type: 'Cinema', id: 'LIST' }],
    }),
    updateCinemas: builder.mutation<Cinema, void>({
      query: () => ({ url: '', method: 'PATCH' }),
      invalidatesTags: (result) => (result ? [{ type: 'Cinema', id: result.id }] : []),
    }),
    createCinemas: builder.mutation<Cinema, void>({
      query: () => ({ url: '', method: 'POST' }),
      invalidatesTags: () => [{ type: 'Cinema', id: 'LIST' }],
    }),
  }),
});

export const { useGetCinemasQuery } = cinemaApi;
