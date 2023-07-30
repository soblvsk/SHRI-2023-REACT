'use client';

import React, { FunctionComponent } from 'react';
import { MovieCard } from '../MovieCard/components';

import styles from './styles.module.scss';
import { useSearchParams } from 'next/navigation';
import { Film } from '@/constants/interfaces';

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

  return (
    <div className={styles.films}>
      {movies.filter(filterMovie).map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
