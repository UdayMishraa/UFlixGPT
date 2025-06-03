import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ page, totalPages, onPrev, onNext }) => {
	return (
		<div className="flex flex-col lg:flex-row items-end justify-center lg:justify-end rounded-lg shadow-lg py-4 px-6 bg-black">
			<div className="flex items-center gap-4 justify-center">
				{/* Prev Button */}
				<button
					onClick={onPrev}
					disabled={page === 1}
					className={`p-2 sm:p-3 rounded-full transition-all duration-200
						${
							page === 1
								? "opacity-40 cursor-not-allowed"
								: "hover:bg-[white] hover:text-black"
						}
						text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white`}
					aria-label="Previous Page"
					title="Previous Page"
				>
					<FaArrowLeft className="text-xl sm:text-2xl lg:text-3xl" />
				</button>

				{/* Page Indicator */}
				<span className="text-white font-semibold text-base sm:text-lg">
					Page {page} of {totalPages}
				</span>

				{/* Next Button */}
				<button
					onClick={onNext}
					disabled={page === totalPages}
					className={`p-2 sm:p-3 rounded-full transition-all duration-200
						${
							page === totalPages
								? "opacity-40 cursor-not-allowed"
								: "hover:bg-white hover:text-black"
						}
						text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white`}
					aria-label="Next Page"
					title="Next Page"
				>
					<FaArrowRight className="text-xl sm:text-2xl lg:text-3xl" />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
