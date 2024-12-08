import { Movie } from "@/types/movie";

import MovieDate from "./MovieDate";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import MovieTitle from "./MovieTitle";
interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
	if (!movie) return null;

	return (
		<div className="p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
			<MoviePoster
				src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				alt={movie.title}
			/>
			<MovieTitle ko_title={movie.korean_title} en_title={movie.title} />
			<MovieRating value={movie.vote_average} />
			<MovieDate date={movie.release_date} />
		</div>
	);
};

export default MovieCard;