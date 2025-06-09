import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MoviesLists from "./MoviesLists";
import Pagination from "./Pagination";
import usePagination from "../hooks/usePagination";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import ShimmerLoader from "./ShimmerLoader";

const MoviesNowPlaying = () => {
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);

	const fetchNowPlaying = async () => {
		setLoading(true); // show loader before fetching
		try {
			const data = await fetch(
				`https://api.themoviedb.org/3/movie/now_playing?&page=${page}`,
				API_OPTIONS
			);
			const json = await data.json();
			dispatch(
				addNowPlayingMovies({
					results: json.results,
					total_pages: json.total_pages,
					total_results: json.total_results,
				})
			);
		} catch (error) {
			console.error("Error fetching now playing movies:", error);
		} finally {
			setLoading(false); // hide loader after fetch
		}
	};

	useEffect(() => {
		fetchNowPlaying();
	}, [page]);

	const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
	const totalPages = useSelector(
		(state) => state?.movies?.nowPlayingData?.totalPages
	);

	const { handleNext, handlePrev } = usePagination(page, setPage, totalPages);

	return (
		<div className="bg-black">
			{loading ? (
				<ShimmerLoader />
			) : (
				<>
					<MoviesLists title={"Now Playing"} movies={movies} />
					<Pagination
						page={page}
						onNext={handleNext}
						onPrev={handlePrev}
						totalPages={totalPages}
					/>
				</>
			)}
		</div>
	);
};

export default MoviesNowPlaying;
