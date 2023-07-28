import React, { FunctionComponent } from 'react';
import { MovieFiltersContainer } from '@/components/MovieFilters/container';
import { MoviesContainer } from '@/components/Movies/container';

import styles from './styles.module.scss';

export const MoviesPage: FunctionComponent<{ cinemaId: string }> = ({ cinemaId }) => {
  return (
    <div className={styles.root}>
      <div className={styles.filters}>
        <MovieFiltersContainer />
      </div>

      <MoviesContainer cinemaId={cinemaId} />
    </div>
  );
};
