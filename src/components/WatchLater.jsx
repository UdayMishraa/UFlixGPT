import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	removeFromWatchLater,
	// fetchInitialWatchLater,
} from "../utils/watchLater";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import MovieCard from "./MovieCard";

const WatchLater = () => {
	const { wishlist } = useSelector((state) => state?.watchLater);
	const dispatch = useDispatch();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOverlayClick = () => {
		setIsModalOpen(false);
	};

	const handleModalClick = (e) => {
		e.stopPropagation();
	};

	return (
		<div className="relative">
			{/* 🔘 Watch Later Icon */}
			<div
				onClick={() => setIsModalOpen(true)}
				className="flex items-center gap-1 text-white cursor-pointer hover:scale-105 transition-transform duration-300"
			>
				{wishlist.length > 0 ? (
					<IoMdHeart className="text-3xl text-red-500 hover:text-red-600 transition duration-300" />
				) : (
					<IoMdHeartEmpty className="text-3xl text-gray-400 hover:text-red-600 transition duration-300" />
				)}
				<span className="text-sm font-medium">{wishlist.length}</span>
			</div>

			{/* 🔳 Modal */}
			{isModalOpen && (
				<div
					className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
					onClick={handleOverlayClick}
				>
					<div
						className="bg-zinc-900 text-white w-full max-w-md max-h-[80vh] rounded-xl p-6 relative overflow-y-auto shadow-2xl border border-zinc-700"
						onClick={handleModalClick}
					>
						{/* ❌ Close Button */}
						<button
							onClick={() => setIsModalOpen(false)}
							className="absolute top-3 right-4 text-2xl font-bold text-zinc-400 hover:text-red-500 transition"
						>
							×
						</button>

						<h2 className="text-2xl font-semibold mb-5 border-b border-zinc-700 pb-3">
							My Watch Later
						</h2>

						{wishlist.length === 0 ? (
							<p className="text-zinc-400">No movies in your list.</p>
						) : (
							<ul className="space-y-4 grid w-full">
								{wishlist.map((movie) => (
									<>
										<MovieCard
											posterPath={movie?.poster_path}
											movie={movie}
											className="w-[50px]"
										/>
										<li
											key={movie.id}
											className="flex items-center justify-between gap-4 bg-zinc-800 p-3 rounded-lg hover:bg-zinc-700 transition"
										>
											{/* 🎬 Movie Title */}
											<span className="truncate max-w-[70%] font-medium text-white">
												{movie.title}
											</span>

											{/* 🗑️ Remove Button */}
											<button
												onClick={() => dispatch(removeFromWatchLater(movie.id))}
												className="text-sm text-red-500 hover:text-red-400 transition font-semibold"
											>
												Remove
											</button>
										</li>
									</>
								))}
							</ul>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default WatchLater;
