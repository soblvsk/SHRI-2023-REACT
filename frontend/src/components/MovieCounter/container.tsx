'use client';

import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { cartSlice } from '@/redux/features/cart';
import { selectMovieAmount } from '@/redux/features/cart/selectors';
import { MovieCounter } from '@/components/MovieCounter/component';

export const MovieCounterContainer: FunctionComponent<{ movieId: string }> = ({ movieId }) => {
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
