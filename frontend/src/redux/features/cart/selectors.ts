import { RootState } from '@/redux/store';

export const selectCartModule = (state: RootState) => state.cart;

export const selectMovieAmount = (state: RootState, movieId: string) => selectCartModule(state)[movieId] || 0;

export const selectMoviesAmount = (state: RootState) =>
  Object.values(selectCartModule(state)).reduce((acc: number, amount: number) => acc + amount, 0);
