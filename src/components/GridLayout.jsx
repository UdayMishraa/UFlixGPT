import React from "react";

const GridLayout = () => {
	return (
		<div className="flex flex-row md:flex-col w-svw h-svh">
			<div className="basis-1/4 bg-amber-200">1/4</div>
			<div className="basis-2/4 bg-orange-500">2/4</div>
			<div className="basis-1/4 bg-pink-500">1/4</div>
		</div>
	);
};

export default GridLayout;
