import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_OPTIONS } from "./constants.js";

// Async thunk to call TMDB API and fetch movies
export const fetchSearchResults = createAsyncThunk(
	"search/fetchSearchResults",
	async (query) => {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
				query
			)}`,
			API_OPTIONS
		);
		if (!res.ok) {
			throw new Error("Failed to fetch search results");
		}

		const data = await res.json();
		return data.results || [];
	}
);

// Slice
const searchSlice = createSlice({
	name: "search",
	initialState: {
		query: "",
		results: [],
		status: "idle",
	},
	reducers: {
		setQuery: (state, action) => {
			state.query = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSearchResults.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchSearchResults.fulfilled, (state, action) => {
				state.results = action.payload;
				state.status = "succeeded";
			})
			.addCase(fetchSearchResults.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
