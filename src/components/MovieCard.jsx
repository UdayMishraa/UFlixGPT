import React from "react";
import { POSTER_CDN } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/moviesSlice";
const MovieCard = ({ posterPath, movie }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		navigate(`/movie/${movie?.id}`);
		dispatch(addMovieDetails(movie));
	};

	return (
		<div
			onClick={handleClick}
			className="object-cover flex flex-col opacity-75 hover:opacity-100 cursor-pointer gap-2 shadow-md rounded-lg 
				px-2 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 
				hover:scale-[1.05] sm:hover:scale-110 
				duration-500 ease-in-out delay-200 transition-all 
				hover:saturate-[125%] items-center"
		>
			<img
				src={POSTER_CDN + posterPath}
				className="bg-cover bg-center hover:shadow-2xl shadow-[#222222] rounded-lg object-cover 
					w-[100px] sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[250px]"
				alt="Movie Poster"
			/>
		</div>
	);
};

export default MovieCard;
