import { Movie } from '@/lib/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Movie[] = [];

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      return action.payload;
    },
  },
});

export const moviesReducer = moviesSlice.reducer;
export const moviesActions = moviesSlice.actions;
