import React, { FunctionComponent } from 'react';
import { MovieContainer } from '@/components/Movie/container';
import { ReviewsContainer } from '@/components/Reviews/container';
interface Props {
  movieId: string;
}

export const MoviePage: FunctionComponent<Props> = ({ movieId }) => {
  return (
    <div>
      <MovieContainer movieId={movieId} />
      <ReviewsContainer movieId={movieId} />
    </div>
  );
};
