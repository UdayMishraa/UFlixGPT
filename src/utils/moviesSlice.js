import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		popularMovies: null,
		topRatedMovies: null,
		upcomingMovies: null,
		movieBackground: null,
		searchMovies: null,
		movieDetails: null,
		movieId: null,
		nowPlayingData: { totalPages: 0, totalResults: 0 },
		popularData: { totalPages: 0, totalResults: 0 },
		topRatedData: { totalPages: 0, totalResults: 0 },
		upcomingData: { totalPages: 0, totalResults: 0 },
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload.results;
			state.nowPlayingData = {
				totalPages: action.payload.total_pages || 0,
				totalResults: action.payload.total_results || 0,
			};
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload.results;
			state.popularData = {
				totalPages: action.payload.total_pages || 0,
				totalResults: action.payload.total_results || 0,
			};
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload.results;
			state.topRatedData = {
				totalPages: action.payload.total_pages || 0,
				totalResults: action.payload.total_results || 0,
			};
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload.results;
			state.upcomingData = {
				totalPages: action.payload.total_pages || 0,
				totalResults: action.payload.total_results || 0,
			};
		},
		addMovieBackground: (state, action) => {
			state.movieBackground = action.payload;
		},
		addSearchMovies: (state, action) => {
			state.searchMovies = action.payload;
		},
		addMovieDetails: (state, action) => {
			state.movieDetails = action.payload;
		},
		addId: (state, action) => {
			state.movieId = action.payload;
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
	addSearchMovies,
	addMovieDetails,
	addId,
} = moviesSlice.actions;
