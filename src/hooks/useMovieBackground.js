import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieBackground } from "../utils/moviesSlice";

const useMovieBackground = (movieId) => {
	const dispatch = useDispatch();
	const getMovieBackground = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos`,
			API_OPTIONS
		);
		const res = await data.json();

		const filterResponse = res.results.filter(
			(video) => video.type === "Trailer"
		);
		const trailer = filterResponse.length ? filterResponse[0] : res.results[0];
		dispatch(addMovieBackground(trailer));
	};

	useEffect(() => {
		getMovieBackground();
	}, []);
};

export default useMovieBackground;
