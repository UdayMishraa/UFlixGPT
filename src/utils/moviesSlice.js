import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		movieBackground: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addMovieBackground: (state, action) => {
			state.movieBackground = action.payload;
		},
	},
});

export default moviesSlice.reducer;
export const { addNowPlayingMovies, addMovieBackground } = moviesSlice.actions;
