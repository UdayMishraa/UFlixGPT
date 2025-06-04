import React from "react";

import MovieBackground from "./MovieBackground";
import MovieTitle from "./MovieTitle";

const MoviesHeader = () => {
	// const movies = useSelector((store) => store.movies?.nowPlayingMovies);

	// if (!movies) {
	// 	return (
	// 		<div className="flex justify-center items-center h-screen">
	// 			<h1 className="text-3xl text-white">Loading...</h1>
	// 		</div>
	// 	);
	// }

	const mainMovie = {
		adult: false,
		backdrop_path: "/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
		genre_ids: [10751, 35, 878],
		id: 552524,
		original_language: "en",
		original_title: "Lilo & Stitch",
		overview:
			"The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
		popularity: 679.0045,
		poster_path: "/tUae3mefrDVTgm5mRzqWnZK6fOP.jpg",
		release_date: "2025-05-17",
		title: "Lilo & Stitch",
		video: false,
		vote_average: 7.078,
		vote_count: 422,
	};
	const { original_title, overview, id } = mainMovie;

	return (
		<div className="z-20 relative">
			<MovieBackground movieId={id} />
			<MovieTitle title={original_title} overview={overview} />
		</div>
	);
};

export default MoviesHeader;
