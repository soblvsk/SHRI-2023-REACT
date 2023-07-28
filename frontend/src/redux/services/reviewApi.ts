import { FeedBack } from '@/constants/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewApi = createApi({
  reducerPath: 'reviewAPi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getReviews: builder.query<FeedBack[], void>({ query: () => 'reviews' }),
    getReviewsByMovie: builder.query<FeedBack[], void>({
      query: (movieId) => `reviews?movieId=${movieId}`,
    }),
  }),
});

export const { useGetReviewsQuery, useGetReviewsByMovieQuery } = reviewApi;
