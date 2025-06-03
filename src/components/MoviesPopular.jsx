import React from "react";
import { useSelector } from "react-redux";
import MoviesLists from "./MoviesLists";
import Pagination from "./Pagination";
import usePagination from "../hooks/usePagination";
import { useState, useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import ShimmerLoader from "./ShimmerLoader";

const MoviesPopular = () => {
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);

	const fetchPopular = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/popular?&page=${page}`,
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(
			addPopularMovies({
				results: json.results,
				total_pages: json.total_pages,
				total_results: json.total_results,
			})
		);
	};

	useEffect(() => {
		fetchPopular();
	}, [page]);
	const movies = useSelector((state) => state?.movies?.popularMovies);
	const totalPages = useSelector(
		(state) => state?.movies?.popularData?.totalPages
	);

	const { handleNext, handlePrev } = usePagination(page, setPage, totalPages);

	return (
		<div className="bg-black ">
			{!movies ? (
				<ShimmerLoader />
			) : (
				<>
					<MoviesLists title={"Popular"} movies={movies} />
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

export default MoviesPopular;
