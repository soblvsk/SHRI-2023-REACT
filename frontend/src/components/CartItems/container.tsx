import React from 'react';
import { CartItems } from '@/components/CartItems/component';
import { fetchMovies } from '@/services/api';

export const CartItemsContainer = async () => {
  const movies = await fetchMovies('');
  return <CartItems movies={movies} />;
};
