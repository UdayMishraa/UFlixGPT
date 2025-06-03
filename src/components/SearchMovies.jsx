import React, { useState } from "react";
import { useSelector } from "react-redux";
import MoviesLists from "./MoviesLists";

const MOVIES_PER_PAGE = 5;

const SearchMovies = () => {
	const { results, query } = useSelector((state) => state.search);
	const [currentPage, setCurrentPage] = useState(1);

	const paginated = results.slice(
		(currentPage - 1) * MOVIES_PER_PAGE,
		currentPage * MOVIES_PER_PAGE
	);

	const totalPages = Math.ceil(results.length / MOVIES_PER_PAGE);

	return (
		<div className="bg-black text-white p-4 min-h-screen">
			{paginated.length > 0 ? (
				<>
					<MoviesLists
						title={`Search Results for "${query}"`}
						movies={paginated}
					/>
					<div className="flex justify-center mt-4 gap-4">
						<button
							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
							disabled={currentPage === 1}
							className="bg-gray-700 px-4 py-2 rounded"
						>
							Prev
						</button>
						<span>
							{currentPage} / {totalPages}
						</span>
						<button
							onClick={() =>
								setCurrentPage((prev) => Math.min(prev + 1, totalPages))
							}
							disabled={currentPage === totalPages}
							className="bg-gray-700 px-4 py-2 rounded"
						>
							Next
						</button>
					</div>
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
