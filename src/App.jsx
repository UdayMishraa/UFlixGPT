import { Provider } from "react-redux";
import Browse from "./components/Browse.jsx";
import GridLayout from "./components/GridLayout.jsx";

import Login from "./components/Login.jsx";
import Body from "./components/Body.jsx";
import appStore from "./utils/appStore.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Body />,
			errorElement: <h1>Page Not Found</h1>,
			children: [
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
			],
		},
	]);
	return (
		<Provider store={appStore}>
			<RouterProvider router={appRouter} />
		</Provider>
	);
}

export default App;
