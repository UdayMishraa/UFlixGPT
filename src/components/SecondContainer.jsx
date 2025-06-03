import React from "react";
import MoviesLists from "./MoviesLists";
import MoviesNowPlaying from "./MoviesNowPlaying";

const SecondContainer = () => {
	// const movies = useSelector((store) => store?.movies);

	return (
		// !movies && (
		<div className="bg-black">
			<div className=" w-full flex flex-col gap-4 h-max z-30">
				<MoviesNowPlaying />
				{/* <MoviesLists title={"Top Rated"} movies={movies?.topRatedMovies} />
				<MoviesLists title={"Upcoming"} movies={movies?.upcomingMovies} />
				<MoviesLists title={"Popular"} movies={movies?.popularMovies} /> */}
				{/* 
        
		Movie Lists - Popular, Top Rated, Upcoming, Now Playing
		
        
        */}
			</div>
		</div>
	);
	// );
};

export default SecondContainer;
