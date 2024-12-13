import { Suspense, lazy } from "react";

import BaseInput from "@/components/common/Input/BaseInput";

// 동적 임포트를 통한 지연 로딩
const MovieList = lazy(() => import("@/components/movie/MovieList"));
const MovieListSkeleton = lazy(
    () => import("@/components/movie/MovieListSkeleton")
);

export default function MoviePage() {
    return (
        <Suspense fallback={<MovieListSkeleton />}>
            {/* 영화 검색 */}
            <BaseInput
                name="movieTitle"
                placeholder="Enter the movie title"
                containerClassName="mx-5 mb-10"
                fullWidth={false}
            />

            <MovieList />
        </Suspense>
    );
}
