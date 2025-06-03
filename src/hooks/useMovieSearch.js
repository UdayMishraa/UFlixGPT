import { useDispatch, useSelector } from "react-redux";
import { setQuery, fetchSearchResults } from "../utils/searchSlice.js";
import { useEffect, useState } from "react";

const useMovieSearch = () => {
	const dispatch = useDispatch();
	const query = useSelector((state) => state?.search?.query);
	const [localInput, setLocalInput] = useState(query);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (localInput.trim()) {
				dispatch(setQuery(localInput));
				dispatch(fetchSearchResults(localInput));
			}
		}, 500);

		return () => clearTimeout(timer);
	}, [localInput, dispatch]);

	const handleInputChange = (e) => {
		setLocalInput(e.target.value);
	};

	return {
		localInput,
		handleInputChange,
	};
};

export default useMovieSearch;
