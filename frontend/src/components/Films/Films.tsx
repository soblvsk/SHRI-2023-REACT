'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { selectFilteredMovies } from '../../redux/features/filtersMovies/selector';

import { localizeGenre } from '../../lib/utils';

import { FilmCard } from '../FilmCard/FilmCard';
import { NotFound } from '../NotFound/NotFound';

import styles from './styles.module.css';

export const Films = () => {
  const films = useSelector((state: RootState) => selectFilteredMovies(state));

  return (
    <div className={styles.films}>
      {films.length > 0 ? (
        films.map((movie) => (
          <FilmCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterUrl={movie.posterUrl}
            genre={localizeGenre(movie.genre)}
          />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};
