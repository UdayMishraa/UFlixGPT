import React, { useRef } from "react";
import { useState } from "react";
import checkValidData from "../utils/validate.js";
import { auth } from "../utils/firebase.js";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice.js";
import { useDispatch } from "react-redux";
import { PROFILE_LOGO } from "../utils/constants.js";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const dispatch = useDispatch();
	const fullName = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const handleButtonClick = () => {
		// console.log(email.current.value, password.current.value);
		if (
			fullName.current?.value === "" ||
			email.current?.value === "" ||
			password.current?.value === ""
		) {
			return setErrorMessage("* All fields are required");
		}

		const message = checkValidData(
			isSignInForm ? null : fullName.current?.value,
			email.current?.value,
			password.current?.value
		);
		setErrorMessage(message);

		if (message) {
			return;
		}

		// Creating a nSign In/ Sign Up Functionality
		if (!isSignInForm) {
			//Sign Up
			createUserWithEmailAndPassword(
				auth,
				email.current?.value,
				password.current?.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					updateProfile(user, {
						displayName: fullName.current?.value,
						photoURL: PROFILE_LOGO,
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(addUser({ uid, email, displayName, photoURL }));
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(`${errorCode}: ${errorMessage}`);
				});
		} else {
			//Sign In
			signInWithEmailAndPassword(
				auth,
				email.current?.value,
				password.current?.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);

					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(`${errorCode}: ${errorMessage}`);
				});
		}
	};

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<>
			<div className="@container sm:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_small.jpg')] bg-fixed bg-center min-h-[100vh] h-svh bg-black font-urbanist flex sm:justify-center bg-cover md:items-center">
				<div className="bg-black/10 md:bg-[#000000d8] text-[rgb(255,255,255)] text-left p-10 flex items-center sm:w-96 w-full min-h-[500px] mt-10  backdrop-blur-md border border-black/20 rounded-2xl shadow-md">
					<form className=" flex flex-col justify-start gap-8 md:gap-6 h-full w-full font-secondary text-[14px] ">
						<h1 className="text-white text-3xl font-[800] font-urbanist ">
							{isSignInForm ? "Sign In" : "Sign Up"}
						</h1>
						{!isSignInForm && (
							<input
								ref={fullName}
								type="text"
								placeholder="Full Name"
								className="p-4 bg-[#80808030] rounded-[2px]"
							/>
						)}
						<input
							ref={email}
							type="text"
							placeholder="Email"
							className="p-4 bg-[#80808030] rounded-[2px]"
						/>
						<input
							ref={password}
							type="password"
							placeholder="Password"
							className="p-4 bg-[#80808030]  rounded-[2px]"
						/>
						<p className="text-red-700 font-bold">{errorMessage}</p>
						<button
							className="hover:bg-red-700/90 bg-red-600"
							onClick={(e) => {
								e.preventDefault();
								handleButtonClick();
							}}
						>
							{isSignInForm ? "Sign In" : "Sign Up"}
						</button>
						<p className="mt-2" onClick={toggleSignInForm}>
							{isSignInForm ? "New to Netflix?" : "Already have an account?"}
							{""}{" "}
							<span className="cursor-pointer hover:underline">
								{isSignInForm ? "Sign Up now." : "Sign In now."}
							</span>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
