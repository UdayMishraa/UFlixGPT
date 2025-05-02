import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		popularMovies: null,
		topRatedMovies: null,
		upcomingMovies: null,
		movieBackground: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload;
		},
		addMovieBackground: (state, action) => {
			state.movieBackground = action.payload;
		},
	},
});

export default moviesSlice.reducer;
export const {
	addNowPlayingMovies,
	addPopularMovies,
	addTopRatedMovies,
	addUpcomingMovies,
	addMovieBackground,
} = moviesSlice.actions;
