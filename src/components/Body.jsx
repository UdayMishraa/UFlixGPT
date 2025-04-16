import React, { useEffect } from "react";
import Browse from "./Browse";
import GridLayout from "./GridLayout";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import Header from "./Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
	const dispatch = useDispatch();

	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/browse",
			element: <Browse />,
		},
		{
			path: "/grid",
			element: <GridLayout />,
		},
	]);

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
		<div className="relative">
			<Header />
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
