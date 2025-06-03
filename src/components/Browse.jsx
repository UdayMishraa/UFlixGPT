import React from "react";

import SecondContainer from "./SecondContainer";
import MoviesHeader from "./MoviesHeader";

const Browse = () => {
	return (
		<div className="w-full min-h-screen bg-black text-white font-urbanist">
			<div className="px-4 sm:px-6 md:px-10 lg:px-20 max-w-screen-2xl mx-auto">
				<MoviesHeader />
				<SecondContainer />
			</div>
		</div>
	);
};

export default Browse;
