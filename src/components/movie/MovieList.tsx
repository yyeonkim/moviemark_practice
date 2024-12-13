"use client";

import { useEffect } from "react";

import { useQuery, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { getMovies, searchMovies } from "@/api/movie";
import { MovieListResponse } from "@/types/movie";

import MovieCard from "./MovieCard/MovieCard";
import MovieListSkeleton from "./MovieListSkeleton";

interface MovieListProps {
    searchQuery: string; // 영화 검색어
}

const MovieList = ({ searchQuery }: MovieListProps) => {
    const { ref, inView } = useInView({
        threshold: 1,
    });

    const { data, isError, hasNextPage, fetchNextPage, isFetchingNextPage } =
        useSuspenseInfiniteQuery<MovieListResponse>({
            queryKey: ["movies"],
            queryFn: ({ pageParam = 1 }) => getMovies(pageParam as number),
            getNextPageParam: (lastPage, allPages) => {
                const nextPage = allPages.length + 1;
                return nextPage <= lastPage.total_pages ? nextPage : undefined;
            },
            initialPageParam: 1,
            staleTime: 1000 * 60 * 5,
        });

    const { data: searchedData, isError: isSearchError } =
        useQuery<MovieListResponse>({
            queryKey: [searchQuery],
            queryFn: async () => await searchMovies(searchQuery, 1, 100),
            enabled: searchQuery !== "",
            refetchOnWindowFocus: false,
        });

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    if (isError)
        return (
            <p className="text-body-small text-white text-center">
                영화 목록을 불러오지 못했습니다.
            </p>
        );

    if (isSearchError)
        return (
            <p className="text-body-small text-white text-center">
                검색된 영화가 없습니다.
            </p>
        );

    return (
        <div className="container mx-auto px-4 invisible-scroll">
            {/* 영화 카드 그리드 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {searchedData
                    ? searchedData.movies.map((movie) => (
                          <MovieCard key={movie.id} movie={movie} />
                      ))
                    : /* 검색하기 전에는 전체 영화 표시 */
                      data?.pages.map((page) =>
                          page.movies.map((movie) => (
                              <MovieCard key={movie.id} movie={movie} />
                          ))
                      )}
            </div>

            {/* 무한 스크롤 감지 영역 */}
            <div ref={ref} className="h-10 mt-4">
                {isFetchingNextPage && <MovieListSkeleton />}
            </div>
        </div>
    );
};

export default MovieList;
