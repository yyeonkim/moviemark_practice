import { Suspense, lazy } from "react";

// 동적 임포트를 통한 지연 로딩
const MovieList = lazy(() => import("@/components/movie/MovieList"));
const MovieListSkeleton = lazy(() => import("@/components/movie/MovieListSkeleton"));

export default function MoviePage() {
	return (
		<Suspense fallback={<MovieListSkeleton />}>
			<MovieList />
		</Suspense>
	);
}
