import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const YoutubePlayer = ({ videoUrl }) => {
	const playerRef = useRef(null);
	const [playing, setPlaying] = useState(false);
	const [played, setPlayed] = useState(0);

	const handlePlayPause = () => {
		setPlaying((prev) => !prev);
	};

	const handleProgress = (state) => {
		setPlayed(state.played);
	};

	const handleSeek = (e) => {
		const newPlayed = parseFloat(e.target.value);
		setPlayed(newPlayed);
		playerRef.current.seekTo(newPlayed);
	};

	return (
		<div className="relative w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl shadow-zinc-800 inset-shadow-xl backdrop-blur-2xl">
			<ReactPlayer
				ref={playerRef}
				url={videoUrl}
				playing={playing}
				onProgress={handleProgress}
				controls={false}
				width="100%"
				height="100%"
			/>

			{/* Custom Controls */}
			<div className="absolute bottom-0 left-0 right-0 bg-black text-white p-4 flex flex-col gap-2">
				{/* Progress Bar */}
				<input
					type="range"
					min={0}
					max={1}
					step="any"
					value={played}
					onChange={handleSeek}
					className="w-full accent-red-500"
				/>

				{/* Controls Row */}
				<div className="flex justify-between items-center">
					<button
						onClick={handlePlayPause}
						className="bg-white text-black font-bold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white transition"
					>
						{playing ? "⏸ Pause" : "▶ Play"}
					</button>

					{/* Volume Slider (optional) */}
					{/* <input type="range" min={0} max={1} step="any" onChange={(e) => playerRef.current.setVolume(parseFloat(e.target.value))} /> */}
				</div>
			</div>
		</div>
	);
};

export default YoutubePlayer;
