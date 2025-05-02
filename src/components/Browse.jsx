import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import SecondContainer from "./SecondContainer";
import MoviesHeader from "./MoviesHeader";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();
	return (
		<div className="w-full h-max px-10 lg:px-20 bg-black text-white font-urbanist">
			<MoviesHeader />
			<SecondContainer />
			{/* 
			MainContainer
			- Video BackGround
			- Title 

			SecondaryContainer
			- Movie List 
			   - Movie Card x n
			
			*/}
		</div>
	);
};

export default Browse;
