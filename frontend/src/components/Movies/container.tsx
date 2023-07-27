import { Movies } from '@/components/Movies/components';
import { fetchMovies } from '@/services/api';
import React, { FunctionComponent } from 'react';

export const MoviesContainer: FunctionComponent<{ cinemaId: string }> = async ({ cinemaId }) => {
  const movies = await fetchMovies(cinemaId);
  return <Movies movies={movies} />;
};
