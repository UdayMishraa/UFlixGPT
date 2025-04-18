import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.js";
import { signOut } from "firebase/auth";

const Header = () => {
	const navigate = useNavigate();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<>
			<div className="px-[1.5rem] sm:px-[2rem] lg:px-[3rem] absolute w-full flex bg-gradient-to-b from-[#000000] to-[#1b1b1b17] justify-between items-center h-[10vh] z-50">
				<img
					src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
					alt="Netflix Logo"
					className="w-28 md:w-36 my-3 cursor-pointer"
				/>
				<div className="flex gap-3 justify-center items-center">
					<img
						src="https://occ-0-3213-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
						alt="Profile Logo"
						className="rounded-md cursor-pointer w-8 h-8 md:w-10 md:h-10"
					/>
					<button
						onClick={() => handleSignOut()}
						className="bg-red-600 px-2 py-1 rounded-md text-white font-urbanist font-[600] text-md
					 cursor-pointer"
					>
						Sign Out
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
