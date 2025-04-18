import React, { useEffect } from "react";

import { Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user;
				dispatch(addUser({ uid, email, displayName }));

				//Assuming you have an action creator named addUser
			} else {
				// User is signed out
				dispatch(removeUser());

				// Assuming you have an action creator named removeUser
			}
		});
	}, []);

	return (
		<div className="relative box-border">
			<Header />
			<Outlet />
		</div>
	);
};

export default Body;
