import { Movies } from '@/components/Movies/components';
import { fetchMovies } from '@/services/api';
import React, { FunctionComponent } from 'react';

interface Props {
  cinemaId: string;
}

export const MoviesContainer: FunctionComponent<Props> = async ({ cinemaId }) => {
  const movies = await fetchMovies(cinemaId);
  return <Movies movies={movies} />;
};
