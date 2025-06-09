// store.js or appStore.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import watchLaterReducer from "./watchLater";

const rootReducer = combineReducers({
	user: userReducer,
	movies: moviesReducer,
	search: searchReducer,
	watchLater: watchLaterReducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user", "watchLater", "movies"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(appStore);
export default appStore;
