import React from "react";
import { POSTER_CDN } from "../utils/constants";
import { Button } from "@/components/ui/button";

const MovieCard = ({ posterPath }) => {
	return (
		<div className="object-cover flex flex-col opacity-75 hover:opacity-100 cursor-pointer gap-2 bg-black shadow-lg rounded-lg p-2 hover:scale-110 transition-transform duration-200 ease-in-out hover:saturate-[125%]">
			<img
				src={POSTER_CDN + posterPath}
				className="bg-cover bg-center rounded-lg object-cover max-w-[220px]"
				alt="Movie Poster"
			/>
		</div>
	);
};

export default MovieCard;
