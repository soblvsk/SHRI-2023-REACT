'use client';

import React, { FunctionComponent } from 'react';
import { MovieCard } from '../MovieCard/components';

import styles from './styles.module.scss';
import { useSearchParams } from 'next/navigation';
import { Film } from '@/constants/interfaces';
import { NotFound } from '../NotFound/component';

export const Movies: FunctionComponent<{ movies: Film[] }> = ({ movies }) => {
  const searchParams = useSearchParams();

  if (!movies?.length) {
    return null;
  }

  const filterMovie = ({ title, genre }: { title: string; genre: string }) => {
    const searchTitle = searchParams.get('title');
    const searchGenre = searchParams.get('genre');
    return (
      (!searchTitle || title.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1) &&
      (!searchGenre || genre === searchGenre)
    );
  };

  const filteredMovies = movies.filter(filterMovie);

  return (
    <div className={styles.films}>
      {filteredMovies.length ? (
        filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <NotFound />
      )}
    </div>
  );
};
