import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	removeFromWatchLater,
	fetchInitialWatchLater,
} from "../utils/watchLater";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const WatchLater = () => {
	const { wishlist, status } = useSelector((state) => state?.watchLater);
	const dispatch = useDispatch();
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (wishlist.length === 0) {
			dispatch(fetchInitialWatchLater());
		}
	}, [wishlist.length, status, dispatch]);

	return (
		<div className="relative">
			<div
				onClick={() => setIsModalOpen(true)}
				className="flex items-center gap-1 text-white cursor-pointer"
			>
				{wishlist.length > 0 ? (
					<IoMdHeart className="text-3xl text-red-500 hover:text-red-600 transition duration-300" />
				) : (
					<IoMdHeartEmpty className="text-3xl text-gray-400 hover:text-red-600 transition duration-300" />
				)}
				<span className="text-sm">{wishlist.length}</span>
			</div>

			{isModalOpen && (
				<div className="fixed inset-0 bg-black/60 backdrop-blur-lg bg-opacity-60 flex items-center justify-center z-50">
					<div className="bg-white/85 backdrop-blur-lg w-96 max-h-[80vh] rounded-lg p-5 relative overflow-y-auto shadow-xl">
						<button
							onClick={() => setIsModalOpen(false)}
							className="absolute top-2 right-3 text-black text-2xl font-bold hover:text-red-600"
						>
							×
						</button>

						<h2 className="text-xl font-bold mb-4">My Watch Later</h2>

						{status === "loading" ? (
							<p className="text-gray-700">Loading...</p>
						) : wishlist.length === 0 ? (
							<p className="text-gray-700">No movies in your list.</p>
						) : (
							<ul className="space-y-3">
								{wishlist.map((movie) => (
									<li
										key={movie.id}
										className="flex justify-between items-center"
									>
										<span className="truncate text-black max-w-[70%]">
											{movie.title}
										</span>
										<button
											onClick={() => dispatch(removeFromWatchLater(movie.id))}
											className="text-red-500 text-sm hover:underline"
										>
											Remove
										</button>
									</li>
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
