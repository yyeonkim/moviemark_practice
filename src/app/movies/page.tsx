"use client";

import { Suspense, lazy, useState } from "react";

// 동적 임포트를 통한 지연 로딩
const MovieList = lazy(() => import("@/components/movie/MovieList"));
const MovieListSkeleton = lazy(
    () => import("@/components/movie/MovieListSkeleton")
);
const MovieSearchInput = lazy(
    () => import("@/components/movie/MovieSearchInput")
);

export default function MoviePage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <Suspense fallback={<MovieListSkeleton />}>
            <MovieSearchInput
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <MovieList searchQuery={searchQuery} />
        </Suspense>
    );
}
