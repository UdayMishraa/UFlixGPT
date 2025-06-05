import React from "react";
import { useSelector } from "react-redux";
import MoviesLists from "./MoviesLists";
import Pagination from "./Pagination";
import usePagination from "../hooks/usePagination";
import { useState, useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import ShimmerLoader from "./ShimmerLoader";

const MoviesNowPlaying = () => {
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);

	const fetchNowPlaying = async () => {
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
		<div className="bg-black ">
			{!movies ? (
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
