import React from "react";
import MovieCard from "./MovieCard";

const MoviesLists = ({ title, movies }) => {
	return (
		<div className="lg:py-6 bg-black w-full lg:my-10">
			<h2 className="text-white text-xl sm:text-2xl lg:text-4xl font-[600] sm:px-6 mb-4">
				{title}
			</h2>

			<div className="overflow-x-auto no-scrollbar py-5 scroll-smooth">
				<div className="flex">
					{movies.map((movie) => (
						<div
							key={movie.id}
							className="min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px] flex-shrink-0"
						>
							<MovieCard posterPath={movie.poster_path} movie={movie} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MoviesLists;
