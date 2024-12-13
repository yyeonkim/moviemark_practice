"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { getMovieDetail } from "@/api/movie";

interface MovieDetailProps {
    movieId: string;
}

export default function MovieDetail({ movieId }: MovieDetailProps) {
    const { data: movie, isLoading } = useQuery({
        queryKey: ["movie", movieId],
        queryFn: () => getMovieDetail(movieId),
    });

    if (isLoading)
        <p className="text-center text-white text-body-small">
            영화 불러오는 중...
        </p>;

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
