import MovieDetail from "@/components/movie/MovieDetail";

export default function MovieDetailPage({ params }: { params: { id: string } }) {
	return <MovieDetail movieId={params.id} />;
}