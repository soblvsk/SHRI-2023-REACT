import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@/redux/features/cart';
import { filteredMoviesReducer } from '@/redux/features/filtersMovies';
import { logger } from '@/redux/middleware/logger';
import { movieApi } from '@/redux/services/movieApi';
import { reviewApi } from '@/redux/services/reviewApi';
import { cinemaApi } from '@/redux/services/cinemaApi';

export const store = configureStore({
  reducer: {
    filteredMovie: filteredMoviesReducer,
    cart: cartReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [cinemaApi.reducerPath]: cinemaApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware, cinemaApi.middleware, reviewApi.middleware, logger]),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
