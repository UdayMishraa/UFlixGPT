import React from "react";
import { useSelector } from "react-redux";
import MoviesLists from "./MoviesLists";

const SearchMovies = () => {
	const { results, query } = useSelector((state) => state.search);

	return (
		<div className="bg-black text-white p-4 min-h-max">
			{results.length > 0 ? (
				<>
					<MoviesLists
						title={`Search Results for "${query}"`}
						movies={results}
					/>
				</>
			) : query ? (
				<p className="text-center text-gray-400">
					No results found for "{query}"
				</p>
			) : null}
		</div>
	);
};

export default SearchMovies;
