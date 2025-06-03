import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";
import searchReducer from "./searchSlice.js";

const appStore = configureStore({
	reducer: {
		user: userReducer,
		movies: moviesReducer,
		search: searchReducer,
	},
});

export default appStore;
