import React, { FunctionComponent } from 'react';
import { MovieContainer } from '@/components/Movie/container';
import { ReviewsContainer } from '@/components/Reviews/container';

import styles from './styles.module.scss';

export const MoviePage: FunctionComponent<{ movieId: string }> = ({ movieId }) => {
  return (
    <div className={styles.root}>
      <MovieContainer movieId={movieId} />
      <ReviewsContainer movieId={movieId} />
    </div>
  );
};
