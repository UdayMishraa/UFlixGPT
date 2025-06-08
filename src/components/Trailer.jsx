import React from "react";
import { useSelector } from "react-redux";
import useMovieBackground from "../hooks/useMovieBackground";
import YouTubePlayer from "./YoutubePlayer.jsx";

const Trailer = () => {
	const movieId = useSelector((store) => store.movies?.movieId);
	const trailerVideo = useSelector((store) => store.movies?.movieBackground);
	useMovieBackground(movieId);

	return (
		<div className="relative h-screen flex justify-center items-center w-full aspect-video overflow-hidden z-0">
			<YouTubePlayer
				videoUrl={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=0&controls=1&loop=1&disablekb=1`}
			/>
		</div>
	);
};

export default Trailer;
