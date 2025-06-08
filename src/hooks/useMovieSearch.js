import { useDispatch, useSelector } from "react-redux";
import { setQuery, fetchSearchResults } from "../utils/searchSlice.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMovieDetails } from "../utils/moviesSlice.js";

const useMovieSearch = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const query = useSelector((state) => state?.search?.query);
	const results = useSelector((state) => state?.search?.results);

	const [localInput, setLocalInput] = useState(query || "");
	const [suggestions, setSuggestions] = useState([]);
	const [activeIndex, setActiveIndex] = useState(-1);

	// Debounced search to reduce API calls

	useEffect(() => {
		const trimmed = localInput.trim();
		if (!trimmed || trimmed === query) return;

		const timer = setTimeout(() => {
			dispatch(setQuery(trimmed));
			dispatch(fetchSearchResults(trimmed));
		}, 500);

		return () => clearTimeout(timer);
	}, [localInput, dispatch, query]);

	// Update suggestions
	useEffect(() => {
		if (localInput.trim()) {
			setSuggestions(results.slice(0, 5));
		} else {
			setSuggestions([]);
		}
	}, [results, localInput]);

	const handleInputChange = (e) => {
		setLocalInput(e.target.value);
		setActiveIndex(-1);
	};

	const handleSuggestionClick = (movie) => {
		setLocalInput(""); // clear input
		setSuggestions([]);
		dispatch(setQuery(movie.title));
		dispatch(addMovieDetails(movie));
		navigate(`/movie/${movie.id}`);
	};

	// Handle Enter key

	const handleKeyDown = (e) => {
		if (e.key === "ArrowDown") {
			setActiveIndex((prev) => (prev + 1) % suggestions.length);
		} else if (e.key === "ArrowUp") {
			setActiveIndex((prev) => (prev <= 0 ? suggestions.length - 1 : prev - 1));
		} else if (e.key === "Enter" && activeIndex !== -1) {
			handleSuggestionClick(suggestions[activeIndex]);
		}
	};

	return {
		localInput,
		activeIndex,
		suggestions,
		handleInputChange,
		handleSuggestionClick,
		setSuggestions,
		handleKeyDown,
	};
};

export default useMovieSearch;
