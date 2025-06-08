import { Provider } from "react-redux";
import Browse from "./components/Browse.jsx";
import GridLayout from "./components/GridLayout.jsx";
import Login from "./components/Login.jsx";
import Body from "./components/Body.jsx";
import appStore from "./utils/appStore.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import SearchMovies from "./components/SearchMovies.jsx";
import Trailer from "./components/Trailer.jsx";

function App() {
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Body />,
			errorElement: <Loader />,
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
					path: "/movie/:movieId",
					element: <MovieDetails />,
				},
				{
					path: "/trailer",
					element: <Trailer />,
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
