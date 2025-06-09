import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://demo3961326.mockable.io/movies/watchLater";

// Async thunk to fetch initial data
export const fetchInitialWatchLater = createAsyncThunk(
	"watchLater/fetchInitial",
	async (_, thunkAPI) => {
		try {
			const response = await fetch(API_URL);
			if (!response.ok) {
				throw new Error("Failed to fetch movies");
			}
			const data = await response.json();
			console.log("Fetched initial watch later movies:", data);
			return data.results.slice(0, 5); // Limit to 5 movies
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

// Slice
const watchLaterSlice = createSlice({
	name: "watchLater",
	initialState: {
		wishlist: [],
		status: "idle", // default should be an array, not null
	},
	reducers: {
		addToWatchLater: (state, action) => {
			const movie = action.payload;
			const exists = state.wishlist.find((item) => item.id === movie.id);
			if (!exists) {
				state.wishlist.push(movie);
			}
		},
		removeFromWatchLater: (state, action) => {
			const movieId = action.payload;
			state.wishlist = state.wishlist.filter((movie) => movie.id !== movieId);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchInitialWatchLater.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchInitialWatchLater.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.watchLaterMovies = action.payload;
			})
			.addCase(fetchInitialWatchLater.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export const { addToWatchLater, removeFromWatchLater } =
	watchLaterSlice.actions;

export default watchLaterSlice.reducer;
