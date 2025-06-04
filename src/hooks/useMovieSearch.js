import { useDispatch, useSelector } from "react-redux";
import { setQuery, fetchSearchResults } from "../utils/searchSlice.js";
import { useEffect, useState } from "react";

const useMovieSearch = () => {
	const dispatch = useDispatch();
	const query = useSelector((state) => state?.search?.query);
	const results = useSelector((state) => state?.search?.results);
	const [localInput, setLocalInput] = useState(query);
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (localInput.trim()) {
				dispatch(setQuery(localInput));
				dispatch(fetchSearchResults(localInput));
			}
		}, 500);

		return () => clearTimeout(timer);
	}, [localInput, dispatch]);

	useEffect(() => {
		// Update top 5 suggestions from search results
		if (localInput.trim()) {
			setSuggestions(results.slice(0, 5));
		} else {
			setSuggestions([]);
		}
	}, [results, localInput]);

	const handleInputChange = (e) => {
		setLocalInput(e.target.value);
	};

	const handleSuggestionClick = (movieTitle) => {
		setLocalInput(movieTitle);
		dispatch(setQuery(movieTitle));
		dispatch(fetchSearchResults(movieTitle));
		setSuggestions([]); // clear suggestions
	};

	return {
		localInput,
		suggestions,
		handleInputChange,
		handleSuggestionClick,
	};
};

export default useMovieSearch;
