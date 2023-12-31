import { Film } from '@/constants/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieAPi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getMovies: builder.query<Film[], void>({ query: () => ({ url: 'movies' }) }),
    getMoviesByCinema: builder.query<Film[], void>({
      query: (cinemaId) => ({
        url: 'movies',
        params: {
          cinemaId,
        },
      }),
    }),
    getMovie: builder.query<Film, void>({ query: (movieId) => `movie?movieId=${movieId}` }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery, useGetMoviesByCinemaQuery } = movieApi;
