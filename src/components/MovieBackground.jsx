import { useSelector } from "react-redux";
import useMovieBackground from "../hooks/useMovieBackground";

const MovieBackground = ({ movieId }) => {
	const trailerVideo = useSelector((store) => store.movies?.movieBackground);
	useMovieBackground(movieId);

	return (
		<div className="relative w-full aspect-video overflow-hidden z-0">
			<iframe
				className="absolute inset-0 w-full h-full object-cover bg-cover backdrop-blur-sm saturate-200"
				src={
					trailerVideo?.key
						? `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`
						: "No trailer available"
				}
				title="YouTube Trailer Background"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			/>
		</div>
	);
};

export default MovieBackground;
