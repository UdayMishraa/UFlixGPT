import React from "react";

import SecondContainer from "./SecondContainer";
import MoviesHeader from "./MoviesHeader";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
	usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();

	return (
		<div className="w-full min-h-screen bg-black text-white font-urbanist">
			<div className="px-4 sm:px-6 md:px-10 lg:px-20 max-w-screen-2xl mx-auto">
				<MoviesHeader />
				<SecondContainer />
			</div>
		</div>
	);
};

export default Browse;
