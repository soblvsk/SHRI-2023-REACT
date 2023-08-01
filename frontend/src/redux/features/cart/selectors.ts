import { RootState } from '@/redux/store';

export const selectCartModule = (state: RootState) => state.cart;

export const selectMovieAmount = (state: RootState, id: string) => selectCartModule(state)[id] || 0;

export const selectTotalAmount = (state: RootState) => {
  const cart = selectCartModule(state);
  return Object.values(cart).reduce((sum, amount) => sum + amount, 0);
};
