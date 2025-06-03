import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.js";
import { signOut } from "firebase/auth";
import { LOGO } from "../utils/constants.js";
import { useSelector } from "react-redux";
import useMovieSearch from "../hooks/useMovieSearch.js";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const { localInput, handleInputChange } = useMovieSearch();

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => navigate("/"))
			.catch(() => {});
	};

	return (
		<div
			className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-black bg-opacity-80 shadow-lg shadow-[#ffffff3b]"
					: "bg-transparent"
			} px-4 sm:px-6 lg:px-12 py-3 flex justify-between items-center`}
		>
			<img
				src={LOGO}
				alt="Netflix Logo"
				className="w-24 sm:w-28 md:w-36 cursor-pointer"
			/>

			{user && (
				<div className="flex flex-wrap gap-3 items-center justify-end">
					<input
						type="text"
						placeholder="Search movies..."
						className="p-2 rounded bg-black text-white w-32 text-sm lg:text-lg sm:w-48"
						value={localInput}
						onChange={handleInputChange}
					/>
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
	);
};

export default Header;
