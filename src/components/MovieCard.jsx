import React from "react";
import { POSTER_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
	return (
		<div className="flex items-center justify-center w-[200px] h-[300px]">
			<img
				src={POSTER_CDN + posterPath}
				className="bg-cover  bg-center rounded-lg object-cover"
				alt="Movie Poster"
			/>
		</div>
	);
};

export default MovieCard;
