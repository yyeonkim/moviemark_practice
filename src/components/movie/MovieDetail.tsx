"use client";

import { useQuery } from "@tanstack/react-query";

import { getMovieDetail } from "@/api/movie";

interface MovieDetailProps {
  movieId: string;
}

export default function MovieDetail({ movieId }: MovieDetailProps) {
	const { data: movie } = useQuery({
		queryKey: ["movie", movieId],
		queryFn: () => getMovieDetail(movieId),
	});

	return (
		<div>
			{/* 영화 상세 정보 표시 */}
		</div>
	);
}