import React from "react";
import MoviesLists from "./MoviesLists";
import { useSelector } from "react-redux";

const SecondContainer = () => {
	const movies = useSelector((store) => store?.movies);

	return (
		movies.nowPlayingMovies && (
			<div className="bg-black flex flex-col gap-4 h-full z-20  lg:px-20 px-10 py-10">
				<MoviesLists title={"Now Playing"} movies={movies?.nowPlayingMovies} />
				{/* 
        
Movie Lists - Popular, Top Rated, Upcoming, Now Playing

        
        */}
			</div>
		)
	);
};

export default SecondContainer;
