import React, { FunctionComponent } from 'react';
import { fetchMovieReviews } from '@/services/api';
import { Reviews } from '@/components/Reviews/component';

export const ReviewsContainer: FunctionComponent<{ movieId: string }> = async ({ movieId }) => {
  const reviews = await fetchMovieReviews(movieId);

  return <Reviews reviews={reviews} />;
};
