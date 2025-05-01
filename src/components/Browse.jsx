import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MoviesBackground from "./MoviesHeader";

import SecondContainer from "./SecondContainer";

const Browse = () => {
	useNowPlayingMovies();
	return (
		<div className="w-full h-screen bg-gray-800 text-white font-urbanist">
			<MoviesBackground />
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
