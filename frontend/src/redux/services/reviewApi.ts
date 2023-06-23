import { Review } from '@/lib/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getReviews: builder.query<Review[], void>({ query: () => 'reviews' }),
    getReview: builder.query<Review[], string>({ query: (movieId) => `reviews?movieId=${movieId}` }),
  }),
});

export const { useGetReviewsQuery, useGetReviewQuery } = reviewApi;
