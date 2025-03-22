import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    toggleSwitch: false,
    moviesName: null,
    moviesResultName: null,
  },
  reducers: {
    addToggleSwitch: (state) => {
      state.toggleSwitch = !state.toggleSwitch;
    },
    addMoviesName: (state, action) => {
      const { aiMovieSearch, searchResult } = action.payload;
      state.moviesName = aiMovieSearch;
      state.moviesResultName = searchResult;
    },
  },
});

export const { addToggleSwitch, addMoviesName } = geminiSlice.actions;
export default geminiSlice.reducer;
