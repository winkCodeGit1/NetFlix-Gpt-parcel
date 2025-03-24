import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovie: null,
    popularMovies: null,
    topRated: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerMovies: (state, action) => {
      state.trailerMovie = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    clearNowPlayingMovies: (state) => {
      state.nowPlayingMovies = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  clearNowPlayingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
