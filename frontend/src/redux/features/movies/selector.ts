import { RootState } from '@/redux/store';

const selectMoviesModule = (state: RootState) => state.movies;

export const selectMovies = (state: RootState) => selectMoviesModule(state) || [];
