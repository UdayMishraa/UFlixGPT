import React from "react";
import MovieCard from "./MovieCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const MoviesLists = ({ title, movies }) => {
	return (
		<div className="py-4 bg-black">
			<h1 className="lg:text-5xl text-2xl font-bold mb-6">{title}</h1>
			<div className="px-5">
				<Carousel className="flex justify-center items-center">
					<CarouselContent>
						{movies.map((movie) => (
							<CarouselItem
								key={movie.id}
								className="basis-1/4 lg:basis-1/8 pl-2"
							>
								<MovieCard posterPath={movie.poster_path} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="bg-black" />
					<CarouselNext className="bg-black" />
				</Carousel>
			</div>
		</div>
	);
};

export default MoviesLists;
