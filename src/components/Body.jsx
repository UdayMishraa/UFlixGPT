import React, { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(addUser({ uid, email, displayName, photoURL }));
				navigate("/browse");
				//Assuming you have an action creator named addUser
			} else {
				// User is signed out
				dispatch(removeUser());
				console.log(dispatch(removeUser()));
				navigate("/");
				// Assuming you have an action creator named removeUser
			}

			return () => {
				unsubscribe();
			};
		});
	}, []);

	return (
		<div className="relative bg-gray-8000 box-border">
			<Header />
			<Outlet />
		</div>
	);
};

export default Body;
