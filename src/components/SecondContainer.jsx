import React, { lazy, Suspense, useState } from "react";
import SearchMovies from "./SearchMovies";
import ShimmerLoader from "./ShimmerLoader";
import LazyLoadSection from "./LazyLoadSection";

const MoviesNowPlaying = lazy(() => import("./MoviesNowPlaying"));
const MoviesPopular = lazy(() => import("./MoviesPopular"));
const MoviesTopRated = lazy(() => import("./MoviesTopRated"));
const MoviesUpcoming = lazy(() => import("./MoviesUpcoming"));

const SecondContainer = () => {
	const [showNowPlaying, setShowNowPlaying] = useState(false);
	const [showPopular, setShowPopular] = useState(false);
	const [showTopRated, setShowTopRated] = useState(false);
	const [showUpcoming, setShowUpcoming] = useState(false);

	return (
		<div className="bg-black">
			<div className="w-full flex flex-col gap-4 h-max z-30 relative">
				<SearchMovies />

				<LazyLoadSection onVisibleChange={() => setShowNowPlaying(true)}>
					<Suspense fallback={<ShimmerLoader />}>
						{showNowPlaying && <MoviesNowPlaying />}
					</Suspense>
				</LazyLoadSection>

				<LazyLoadSection onVisibleChange={() => setShowPopular(true)}>
					<Suspense fallback={<ShimmerLoader />}>
						{showPopular && <MoviesPopular />}
					</Suspense>
				</LazyLoadSection>

				<LazyLoadSection onVisibleChange={() => setShowTopRated(true)}>
					<Suspense fallback={<ShimmerLoader />}>
						{showTopRated && <MoviesTopRated />}
					</Suspense>
				</LazyLoadSection>

				<LazyLoadSection onVisibleChange={() => setShowUpcoming(true)}>
					<Suspense fallback={<ShimmerLoader />}>
						{showUpcoming && <MoviesUpcoming />}
					</Suspense>
				</LazyLoadSection>
			</div>
		</div>
	);
};

export default SecondContainer;
