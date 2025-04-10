import React from "react";
import Browse from "./Browse";
import GridLayout from "./GridLayout";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import Header from "./Header";

const Body = () => {
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
	return (
		<div className="relative">
			<Header />
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
