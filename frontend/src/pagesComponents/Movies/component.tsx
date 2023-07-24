import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';
import { MovieFiltersContainer } from '@/components/MovieFilters/container';
import { MoviesContainer } from '@/components/Movies/container';

interface Props {
  cinemaId: string;
}

export const MoviesPage: FunctionComponent<Props> = ({ cinemaId }) => {
  return (
    <div className={styles.root}>
      <div className={styles.filters}>
        <MovieFiltersContainer />
      </div>

      <MoviesContainer cinemaId={cinemaId} />
    </div>
  );
};
