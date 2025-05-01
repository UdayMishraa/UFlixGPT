import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.js";
import { signOut } from "firebase/auth";
import { LOGO, PROFILE_LOGO } from "../utils/constants.js";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch(() => {});
	};

	return (
		<>
			<div className="px-[1.5rem] sm:px-[2rem] lg:px-[3rem] absolute w-full flex bg-gradient-to-b from-[#000000] to-[#1b1b1b17] justify-between items-center h-[10vh] z-50">
				<img
					src={LOGO}
					alt="Netflix Logo"
					className="w-28 md:w-36 my-3 cursor-pointer"
				/>
				{user && (
					<div className="flex gap-3 justify-center items-center">
						<img
							src={user?.photoURL}
							alt="Profile Logo"
							className="rounded-md cursor-pointer w-8 h-8 md:w-10 md:h-10"
						/>
						<button
							onClick={() => handleSignOut()}
							className="bg-red-600 px-2 py-1 text-white font-urbanist cursor-pointer"
						>
							Sign Out
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default Header;
