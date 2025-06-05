import { useDispatch, useSelector } from "react-redux";
import { setQuery, fetchSearchResults } from "../utils/searchSlice.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMovieDetails } from "../utils/moviesSlice.js";

const useMovieSearch = () => {
	const dispatch = useDispatch();
	const query = useSelector((state) => state?.search?.query);
	const results = useSelector((state) => state?.search?.results);
	const [localInput, setLocalInput] = useState(query);
	const [suggestions, setSuggestions] = useState([]);
	const navigate = useNavigate();

	//debounced search
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

	const handleSuggestionClick = (movie) => {
		setLocalInput(movie.title);
		dispatch(setQuery(movie.title));
		setSuggestions([]); // clear suggestions
		dispatch(addMovieDetails(movie)); // dispatch the clicked movie, NOT entire results
		navigate(`/movie/${movie.id}`);
	};

	return {
		localInput,
		suggestions,
		handleInputChange,
		handleSuggestionClick,
		setSuggestions,
	};
};

export default useMovieSearch;
