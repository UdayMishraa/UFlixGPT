import React from "react";

const MovieTitle = ({ title, overview }) => {
	return (
		<div className="absolute inset-0 z-30 flex items-end bg-gradient-to-r from-black/90 via-black/60 to-transparent w-full aspect-video">
			<div className="p-4 sm:p-6 lg:p-12 text-white max-w-screen-xl w-full">
				<div className="flex flex-col gap-2 lg:gap-5">
					<h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
						{title}
					</h1>
					<p className="text-sm sm:text-base lg:text-xl max-w-lg hidden sm:block">
						{overview}
					</p>
					<div className="flex gap-2 mt-4">
						{/* Play Button */}
						<button className="bg-white hover:bg-white/80 text-black font-semibold px-4 py-2 rounded flex items-center gap-2 transition-all duration-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-5 h-5"
							>
								<path
									fillRule="evenodd"
									d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
									clipRule="evenodd"
								/>
							</svg>
							Play
						</button>

						{/* More Info Button */}
						<button className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded flex items-center gap-2 transition-all duration-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
								/>
							</svg>
							More Info
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieTitle;
