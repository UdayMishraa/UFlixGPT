import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MoviesBackground from "./MoviesHeader";
import MoviesLists from "./MoviesLists";

const Browse = () => {
	useNowPlayingMovies();
	return (
		<div className="w-full h-full bg-gray-800 text-white font-urbanist">
			<MoviesBackground />
			<MoviesLists />
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
