import { useCallback } from "react";

const usePagination = (page, setPage, totalPages) => {
	const handlePrev = useCallback(() => {
		if (page > 1) setPage(page - 1);
	}, [page, setPage]);

	const handleNext = useCallback(() => {
		if (page < totalPages) setPage(page + 1);
	}, [page, totalPages, setPage]);

	return {
		handlePrev,
		handleNext,
	};
};

export default usePagination;
