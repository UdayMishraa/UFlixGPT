import React from "react";
import { useSelector } from "react-redux";
import MovieBackground from "./MovieBackground";
import MovieTitle from "./MovieTitle";

const MoviesHeader = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies);

	if (!movies) {
		return (
			<div className="flex justify-center items-center h-screen">
				<h1 className="text-3xl text-white">Loading...</h1>
			</div>
		);
	}

	const mainMovie = movies[0];
	const { original_title, overview, id } = mainMovie;

	return (
		<div className="relative h-[100vh]">
			<MovieBackground movieId={id} />
			<MovieTitle title={original_title} overview={overview} />
		</div>
	);
};

export default MoviesHeader;
