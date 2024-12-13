"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { getMovieDetail } from "@/api/movie";
import MoviePoster from "./MovieCard/MoviePoster";

interface MovieDetailProps {
    movieId: string;
}

export default function MovieDetail({ movieId }: MovieDetailProps) {
    const { data: movie } = useQuery({
        queryKey: ["movie", movieId],
        queryFn: () => getMovieDetail(movieId),
    });

    return (
        <div className="flex gap-20 px-5 md:px-10 lg:px-0 ">
            <Image
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie?.title ?? ""}
                className="object-cover rounded-md"
                width={400}
                height={600}
            />
            <div className="text-white">
                <h1 className="text-heading-1">{movie?.korean_title}</h1>
                <h2 className="text-heading-2">{movie?.title}</h2>
                <div className="grid grid-cols-2 text-body-small mt-10">
                    <span>Release Date: {movie?.release_date}</span>
                    <span>Vote Average: {movie?.vote_average}</span>
                </div>
                <p className="text-body mt-5">{movie?.overview}</p>
            </div>
        </div>
    );
}
