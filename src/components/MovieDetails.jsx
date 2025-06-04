import React from "react";
import { useSelector } from "react-redux";

const MovieDetails = () => {
	const movieDetails = useSelector((store) => store?.movies?.movieDetails);

	if (!movieDetails) {
		return (
			<div className="h-screen bg-black text-white flex items-center justify-center font-urbanist">
				<p className="text-2xl animate-pulse">Loading movie details...</p>
			</div>
		);
	}

	const {
		title,
		overview,
		poster_path,
		release_date,
		vote_average,
		backdrop_path,
	} = movieDetails;

	return (
		<div className="relative min-h-screen text-white font-urbanist bg-black overflow-hidden flex items-center">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<img
					src={`https://image.tmdb.org/t/p/original${
						backdrop_path || poster_path
					}`}
					alt={title}
					className="w-full h-full object-cover brightness-[0.3] blur-sm scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-12">
				{/* Movie Poster */}
				<div className="mx-auto lg:mx-0">
					<img
						src={`https://image.tmdb.org/t/p/w500${poster_path}`}
						alt={title}
						className="w-[300px] lg:w-[350px] rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
					/>
				</div>

				{/* Info Box */}
				<div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg w-full flex flex-col justify-center gap-6">
					<h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
						{title}
					</h1>
					<p className="text-md lg:text-lg text-gray-200 leading-relaxed">
						{overview}
					</p>

					{/* Tags and Meta Info */}
					<div className="flex flex-wrap gap-3 text-sm mt-4">
						<span className="bg-red-600 px-4 py-1 rounded-full font-semibold">
							⭐ {vote_average?.toFixed(1)} / 10
						</span>
						<span className="bg-gray-700 px-4 py-1 rounded-full">
							📅 {new Date(release_date).toLocaleDateString()}
						</span>
						<span className="bg-gray-700 px-4 py-1 rounded-full">🎬 Movie</span>
					</div>

					{/* Action Buttons */}
					<div className="flex gap-4 mt-6">
						<button className="bg-white text-black px-6 py-2 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
							▶️ Play
						</button>
						<button className="bg-gray-800 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-gray-700 transition-all shadow-md">
							➕ Add to My List
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
