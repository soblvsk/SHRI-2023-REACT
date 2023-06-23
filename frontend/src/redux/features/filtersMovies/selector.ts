import { RootState } from '@/redux/store';
const selectMoviesModule = (state: RootState) => state.filteredMovie;

export const selectFilteredMovies = (state: RootState) => selectMoviesModule(state) || [];
