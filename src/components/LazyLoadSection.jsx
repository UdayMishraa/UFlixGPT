import React, { useEffect, useRef } from "react";

const LazyLoadSection = ({ onVisibleChange, children }) => {
	const ref = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (onVisibleChange) {
					onVisibleChange(entry.isIntersecting);
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
	}, [onVisibleChange]);

	return <div ref={ref}>{children}</div>;
};

export default LazyLoadSection;
