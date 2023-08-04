'use client';

import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

import styles from './styles.module.scss';
import { MovieCard } from '../MovieCard/components';
import { selectCartModule } from '@/redux/features/cart/selectors';
import { Film } from '@/constants/interfaces';

export const CartItems: FunctionComponent<{ movies: Film[] }> = ({ movies }) => {
  const cart = useSelector((state: RootState) => selectCartModule(state));

  const cartMovies = movies.filter((movie) => cart[movie.id]);
  console.log(cartMovies);
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}></div>
      {cartMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} isCart={true} />
      ))}
    </div>
  );
};
