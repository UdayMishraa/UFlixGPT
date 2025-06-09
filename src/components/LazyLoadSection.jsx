import React, { useEffect, useRef, useState } from "react";

const LazyLoadSection = ({ onVisibleChange, children }) => {
	const ref = useRef();
	const [hasIntersected, setHasIntersected] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasIntersected) {
					setHasIntersected(true);
					if (onVisibleChange) onVisibleChange(true);
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);

		if (ref.current) observer.observe(ref.current);

		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, [onVisibleChange, hasIntersected]);

	return <div ref={ref}>{children}</div>;
};

export default LazyLoadSection;
