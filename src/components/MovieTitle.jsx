import React from "react";

const MovieTitle = ({ title, overview }) => {
	return (
		<div className="flex flex-col justify-center py-10 gap-2 lg:gap-5 z-20 absolute aspect-video bg-gradient-to-r w-full from-[#000000] transform bottom-0">
			<div className="flex flex-col gap-2 lg:gap-6">
				<h1 className="lg:text-5xl font-[600] text-2xl">{title}</h1>
				<p className={"text-sm lg:text-xl md:w-[40%] hidden sm:block"}>
					{overview}
				</p>
			</div>
			<div className="flex gap-2 lg:gap-4">
				<button className="bg-white hover:bg-white/70 text-gray-800 flex items-center justify-center gap-1">
					<span className="inline-block">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-6"
						>
							<path
								fillRule="evenodd"
								d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
					Play
				</button>
				<button className="bg-gray-400 hover:bg-gray-400/70 flex justify-center items-center gap-1 text-white">
					<span className="inline-block">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
							/>
						</svg>
					</span>
					More info
				</button>
			</div>
		</div>
	);
};

export default MovieTitle;
