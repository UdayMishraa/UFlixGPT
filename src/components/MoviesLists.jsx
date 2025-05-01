import React from "react";
import MovieCard from "./MovieCard";

const MoviesLists = ({ title, movies }) => {
	console.log(movies);
	return (
		<div className="flex overflow-x-scroll scroll-smooth z-30 ">
			<div className="flex flex-col gap-6">
				<h1 className="text-5xl font-bold">{title}</h1>
				<div className="flex h-full gap-4">
					{movies.map((movie) => (
						<MovieCard key={movie.id} posterPath={movie.poster_path} />
					))}
				</div>
			</div>
		</div>
	);
};

export default MoviesLists;
