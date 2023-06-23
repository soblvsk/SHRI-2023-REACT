import { Movie } from '@/lib/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Movie[] = [];

const filteredMoviesSlice = createSlice({
  name: 'filteredMovies',
  initialState,
  reducers: {
    setFilteredMovies: (state, action: PayloadAction<Movie[]>) => {
      return action.payload;
    },
  },
});

export const filteredMoviesReducer = filteredMoviesSlice.reducer;
export const filteredMoviesActions = filteredMoviesSlice.actions;
