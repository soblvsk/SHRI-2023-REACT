import React, { FunctionComponent } from 'react';
import { Movie } from '@/components/Movie/component';
import { fetchMovie } from '@/services/api';

export const MovieContainer: FunctionComponent<{ movieId: string }> = async ({ movieId }) => {
  const movie = await fetchMovie(movieId);

  return <Movie movie={movie} />;
};
