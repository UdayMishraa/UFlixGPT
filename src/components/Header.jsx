import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.js";
import { signOut } from "firebase/auth";
import { LOGO } from "../utils/constants.js";
import { useSelector } from "react-redux";
import useMovieSearch from "../hooks/useMovieSearch.js";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const {
		localInput,
		suggestions,
		activeIndex,
		handleInputChange,
		handleSuggestionClick,
		setSuggestions,
		handleKeyDown, // required to clear suggestions
	} = useMovieSearch();

	const inputRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);

	// Handle scroll styling
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close suggestions when clicking outside input/search area
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (inputRef.current && !inputRef.current.contains(e.target)) {
				setSuggestions([]);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [setSuggestions]);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => navigate("/"))
			.catch(() => {});
	};

	return (
		<div
			className={`w-full sticky top-0 left-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-black bg-opacity-80 shadow-lg shadow-[#ffffff3b]"
					: "bg-transparent"
			} h-20`}
		>
			<div className="px-4 sm:px-6 flex justify-between items-center md:px-10 lg:px-20 max-w-screen-2xl mx-auto py-3">
				<Link to={"/browse"}>
					<img
						src={LOGO}
						alt="Netflix Logo"
						className="w-24 sm:w-28 md:w-36 cursor-pointer"
					/>
				</Link>
				{user && (
					<div className="relative flex gap-3 items-center" ref={inputRef}>
						<input
							type="text"
							placeholder="Search movies..."
							className="text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-red-600 transition-colors w-full md:w-80 lg:w-96 px-3 py-1"
							value={localInput}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
						/>

						{/* Suggestions Dropdown */}
						{suggestions.length > 0 && (
							<ul className="absolute top-10 left-0 w-full bg-white text-black rounded shadow-md z-50 max-h-60 overflow-y-auto">
								{suggestions.map((movie, index) => (
									<li
										key={movie.id}
										className={`px-3 py-2 cursor-pointer ${
											index === activeIndex
												? "bg-gray-300 font-semibold"
												: "hover:bg-gray-200"
										}`}
										onClick={() => handleSuggestionClick(movie)}
									>
										{movie.title}
									</li>
								))}
							</ul>
						)}
						<img
							src={user?.photoURL}
							alt="Profile"
							className="rounded-md cursor-pointer w-8 h-8 md:w-10 md:h-10"
						/>
						<button
							onClick={handleSignOut}
							className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700 transition"
						>
							Sign Out
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
