import React from "react";

const ShimmerLoader = () => {
	return (
		<div className="flex gap-4 overflow-x-auto mt-4">
			{[...Array(5)].map((_, i) => (
				<div
					key={i}
					className="w-40 h-60 bg-gray-700 animate-pulse rounded-lg"
				/>
			))}
		</div>
	);
};

export default ShimmerLoader;
