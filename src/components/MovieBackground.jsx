import { useSelector } from "react-redux";
import useMovieBackground from "../hooks/useMovieBackground";

const MovieBackground = ({ movieId }) => {
	const trailerVideo = useSelector((store) => store.movies?.movieBackground);
	useMovieBackground(movieId);
	return (
		<div className="absolute aspect-video w-full">
			<iframe
				className="aspect-video w-full object-cover bg-cover backdrop-blur-sm saturate-200"
				src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default MovieBackground;
