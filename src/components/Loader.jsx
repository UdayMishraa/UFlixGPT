// Loader.jsx
import React from "react";

const Loader = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-black">
			<div className="relative w-20 h-20">
				<div className="absolute inset-0 rounded-full border-4 border-red-600 animate-ping" />
				<div className="absolute inset-2 rounded-full border-4 border-red-500 animate-pulse" />
				<div className="absolute inset-4 rounded-full bg-red-600" />
			</div>
		</div>
	);
};

export default Loader;
