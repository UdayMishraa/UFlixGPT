import React from "react";
import { useSelector } from "react-redux";
import MoviesLists from "./MoviesLists";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import ShimmerLoader from "./ShimmerLoader";
import usePagination from "../hooks/usePagination";

const MoviesUpcoming = () => {
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);

	const fetchUpcoming = async () => {
		setLoading(true);
		try {
			const data = await fetch(
				`https://api.themoviedb.org/3/movie/upcoming?&page=${page}`,
				API_OPTIONS
			);
			const json = await data.json();
			dispatch(
				addUpcomingMovies({
					results: json.results,
					total_pages: json.total_pages,
					total_results: json.total_results,
				})
			);
		} catch (error) {
			console.error("Error fetching upcoming movies:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUpcoming();
	}, [page]);
	const movies = useSelector((state) => state?.movies?.upcomingMovies);
	const totalPages = useSelector(
		(state) => state?.movies?.upcomingData?.totalPages
	);
	const { handleNext, handlePrev } = usePagination(page, setPage, totalPages);
	return (
		<div className="bg-black h-max">
			{loading ? (
				<ShimmerLoader />
			) : (
				<>
					<MoviesLists title={"Upcoming"} movies={movies} />
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

export default MoviesUpcoming;
