import React from "react";

const ShimmerLoader = () => {
	return (
		<>
			<div className="lg:py-6 bg-black w-full lg:my-10 h-max">
				<div className="text-white text-xl sm:text-2xl lg:text-4xl font-[600] sm:px-6 mb-4">
					<div className="w-48 h-6 bg-gray-700 rounded animate-pulse mb-2" />
				</div>

				<div className="overflow-x-auto no-scrollbar py-5 scroll-smooth">
					<div className="flex gap-4 px-6">
						{[...Array(8)].map((_, i) => (
							<div
								key={i}
								className="min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px] h-[320px] bg-gray-900 rounded-lg animate-pulse"
							/>
						))}
					</div>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row items-end justify-center  rounded-lg shadow-lg py-4 px-6 bg-gray-900 animate-pulse">
				<div className="flex items-center bg-gray-800 gap-4 justify-center lg:justify-end animate-pulse"></div>
			</div>
		</>
	);
};

export default ShimmerLoader;
