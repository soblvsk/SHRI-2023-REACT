'use client';

import { RootState } from '@/redux/store';
import { MovieCounter } from '@/components/MovieCounter/component';
import { cartSlice } from '@/redux/features/cart';
import { selectMovieAmount } from '@/redux/features/cart/selectors';
import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  movieId: string;
}

export const MovieCounterContainer: FunctionComponent<Props> = ({ movieId }) => {
  const amount = useSelector((state: RootState) => selectMovieAmount(state, movieId));
  const dispatch = useDispatch();

  return (
    <MovieCounter
      amount={amount}
      decrement={() => dispatch(cartSlice.actions.decrement(movieId))}
      increment={() => dispatch(cartSlice.actions.increment(movieId))}
    />
  );
};
